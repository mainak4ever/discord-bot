import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (messages) => {
  if (messages.author.bot) return;
  messages.reply({
    content: "Hi from Bot",
  });
});

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "ping") {
    interaction.reply("Pong");
  }
});

client.login(
  "MTIwMDg4OTQ3Mjg5NjcyOTExOQ.G8W8E1.D2ghPz5fe1RxefB_s9kkd4FCBRy_grgSjkg92E"
);
