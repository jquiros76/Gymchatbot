const MAKE_AI_URL = import.meta.env.VITE_MAKE_AI_URL;

export async function sendAIMessage(message, gymId = "powergym") {

  const res = await fetch(MAKE_AI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message,
      gymId
    })
  });

  const data = await res.json();

  return data.reply;
}
