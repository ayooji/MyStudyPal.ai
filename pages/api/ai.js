
require('dotenv').config();
const ai = require('./../../config');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  let subject = req.body.subject;
  let question = req.body.question;
  if (!question || !question) return res.status(400).json({ error: 'Please enter a subject and question' });
  let response;
  try {
    response = await fetch(`https://api.openai.com/v1/engines/text-davinci-002/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ai.openai}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'max_tokens': 1000,
        'temperature': 0.9,
        'top_p': 1,
        'n': 1,
        'stream': false,
        'prompt': 'Solve this brilliantly and intelligently '+subject+': '+question+' Here is your complete and detailed answer:', 
        'frequency_penalty': 0,
      })
    });
  } catch (error) {
    res.status(500).json({ error: 'something went wrong' });
  }
  const json = await response.json();
  return res.status(200)
    .set('Content-Type', 'application/json')
    .json({
      "choices": json.choices
    });
}
