import Mail from 'nodemailer/lib/mailer';

export async function post({ request }) {
  const data = await request.json();
  console.log(data);
}
