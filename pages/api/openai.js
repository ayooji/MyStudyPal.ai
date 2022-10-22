export async function fetchAnswer(text) {
  const url = 'https://mystudypal.pythonanywhere.com/webhook';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"text": result, "subject": subject})
  });
  
  const data = await res.text();
  return data;
}
