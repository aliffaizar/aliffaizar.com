import nodemailer from 'nodemailer';

export default class Email {
  constructor(data) {
    this.to = data.email;
    this.from = import.meta.env.EMAIL_FROM;
    this.message = data.message;
  }
  createTransport() {
    if (import.meta.env.PROD) {
      return nodemailer.createTransport({
        host: import.meta.env.SMTP_HOST,
        port: import.meta.env.SMTP_PORT,
        secure: true,
        auth: {
          user: import.meta.env.SMTP_USER,
          pass: import.meta.env.SMTP_PASS,
        },
      });
    }
    return nodemailer.createTransport({
      host: import.meta.env.EMAIL_HOST,
      port: import.meta.env.EMAIL_PORT,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });
  }
  async send(subject) {
    const mailOptopn = {
      from: this.from,
      to: this.to,
      subject,
      text: 'This is fot testing',
    };
    await this.createTransport().sendMail(mailOptopn);
  }
  async sendThankYou() {
    await this.send('Thank You');
  }
}
