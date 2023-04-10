export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  console.log(name, email, subject, message);

  const telegramSend = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `<b>New Support Message Received</b>\n\n<b>Name: </b><b><code>${name}</code></b>\n<b>Email: </b><code>${email}</code>\n<b>Subject: </b><code>${subject}</code>\n\n<b>Message: </b><code>${message}</code>`,
        parse_mode: "HTML",
      }),
    }
  );

  const telegramResponse = await telegramSend.json();

  if (telegramResponse.ok) {
    return {
      success: true,
    };
  } else {
    return {
      success: false,
    };
  }
}
