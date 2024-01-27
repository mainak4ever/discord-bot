import { ChatGPTUnofficialProxyAPI } from "chatgpt";

async function example() {
  const api = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.OPENAI_ACCESS_TOKEN,
  });

  const res = await api.sendMessage("Hello World!");
  console.log(res.text);
}

const api = new ChatGPTUnofficialProxyAPI({
  accessToken: process.env.OPENAI_ACCESS_TOKEN,
  apiReverseProxyUrl: "https://ai.fakeopen.com/api/conversation",
});
