
const keys = require('../../keys');
const openai = require('./openai');

module.exports = {
  getAnswer: async function(question,subject) {
    try {
      const response = await fetch(`https://api.openai.com/v1/engines/text-davinci-002/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${keys.openai}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'max_tokens': 1000,
          'temperature': 0.9,
          'top_p': 1,
          'n': 1,
          'stream': false,
          'prompt': 'Solve this brilliantly and intelligently '+'Subject'+': '+subject+' , '+' Question'+': '+question+' Here is your complete and detailed answer:', 
          'frequency_penalty': 0,
        })
      });
      const json = await response.json();
      return json.choices[0].text;
    } catch (error) {
      console.log(error);
    }
  }
}

