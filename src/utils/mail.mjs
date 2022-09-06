import nodemailer from 'nodemailer';

const template = `<p className='text-base'>Hello, {name}.</p>
      <p>Thank you for r</p>
      <div className='w-full flex items-center justify-center fixed bottom-0'>
        <div>
          <img src='/images/me.jspg' alt='' />
          <div>
            <h1>Alif Faizar</h1>
            <p>Web Developer</p>
          </div>
        </div>
      </div>`;

class Email {
  constructor(form) {
    (this.to = form.email),
      (this.name = form.name),
      (this.from = `Alif Faizar ${import.meta.env.MYEMAIL}`);
  }

  newTransport() {
    return nodemailer.createTransport({
      host: import.meta.env.EMAIL_HOST,
      port: import.meta.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });
  }

  async sendMail() {
    const html = template;
    const mailOptoin = {
      from: this.from,
      to: this.to,
      subject: 'Thank You',
      html,
    };
    await this.newTransport.sendMail(mailOptoin);
  }
}

export default Email;
