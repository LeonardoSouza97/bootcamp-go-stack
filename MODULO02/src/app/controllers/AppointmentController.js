import * as Yup from 'yup';
import { isBefore, startOfHour, parseISO } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
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

    const checkAvaliability = Appointment.findOne({
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

    const provider = await Appointment.create({
      provider_id,
      date: hourStart,
      user_id: req.userId,
    });

    return res.json(provider);
  }
}

export default new AppointmentController();
