import * as Yup from 'yup';
import { isBefore, startOfHour, parseISO, format, subHours } from 'date-fns';
import { pt } from 'date-fns/locale/pt';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import Notification from '../schemas/Notification';
import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';

class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const appointments = await Appointment.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'date'],
      include: {
        model: User,
        as: 'provider',
        attributes: ['id', 'name'],
        include: {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      },
    });

    return res.json(appointments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Campos inválidos' });
    }

    // eslint-disable-next-line camelcase
    const { provider_id, date } = req.body;

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'Precisa ser um prestador de serviços' });
    }

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res
        .status(400)
        .json({ error: 'Não pode agendar uma data passada' });
    }

    const checkAvaliability = await Appointment.findOne({
      where: {
        provider_id,
        date: hourStart,
        canceled_at: null,
      },
    });

    if (checkAvaliability) {
      return res
        .status(400)
        .json({ error: 'Não há disponibilidade nesse horário' });
    }

    const user = await User.findByPk(req.userId);

    const formattedDate = format(
      hourStart,
      "'Dia' dd 'de' MMMM', às' H:mm'h' ",
      { locale: pt }
    );

    await Notification.create({
      content: `Novo agendamento de ${user.name} para dia ${formattedDate}`,
      user: req.userId,
    });

    const provider = await Appointment.create({
      provider_id,
      date: hourStart,
      user_id: req.userId,
    });

    return res.json(provider);
  }

  async delete(req, res) {
    const appointment = await Appointment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: `provider`,
          attributes: [`name`, `email`],
        },
        { model: User, as: 'user', attributes: [`name`] },
      ],
    });

    if (!appointment) {
      res.status(401).json({ error: 'Agendamento não encontrado' });
    }

    if (appointment.user_id !== req.userId) {
      res
        .status(401)
        .json({ error: 'Você só pode cancelar agendamentos próprios' });
    }

    const dateWithSub = subHours(appointment.date, 2);

    if (isBefore(dateWithSub, new Date())) {
      return res.status(401).json({
        error:
          'Você só pode cancelar agendamentos com até 2 horas antes do horário do agendamento',
      });
    }

    appointment.canceled_at = new Date();

    await appointment.save(appointment);

    await Queue.add(CancellationMail.key, {
      appointment,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
