import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIwMDg4OTQ3Mjg5NjcyOTExOQ.G8W8E1.D2ghPz5fe1RxefB_s9kkd4FCBRy_grgSjkg92E"
);
try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1200889472896729119"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
