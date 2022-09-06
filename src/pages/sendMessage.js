import Email from '../utils/mail.mjs';

export async function post({ request }) {
  const data = await request.json();
  await new Email(data).sendThankYou();

  return new Response(null, { status: 200 });
}
