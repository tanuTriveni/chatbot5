import API_KEY1 from "apikey.js";
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = API_KEY1;

const preText =
  "I am your personal informational guide for health issues and there solution.i am healthy heath bot  ";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";

  messages.innerHTML += `<div class="message user-message">
  <span>${message}</span>
  </div>`;

  // Use axios library to make a POST request to the OpenAI API
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: preText + `${message}`,
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const chatbotResponse = response.data.choices[0].text;

  messages.innerHTML += `<div class="message bot-message">
  <img src="C://Users//HP//Desktop//gfghack//icons//chatbot.png" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
});