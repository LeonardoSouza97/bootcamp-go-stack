import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMail';
  }

  async handle({ data }) {
    const { appointment } = data;

    await Mail.sendEmail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Novo cancelamento',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'Dia' dd 'de' MMMM', às' H:mm'h' ",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
