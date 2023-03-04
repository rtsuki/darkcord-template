const { API, Client, Cache } = require("darkcord");
const { readdir } = require("fs/promises");

const { GatewayIntentBits } = API;
const ClientIntents =
    GatewayIntentBits.Guilds |
    GatewayIntentBits.GuildMembers |
    GatewayIntentBits.GuildMessages |
    GatewayIntentBits.MessageContent;

const client = new Client("BOT Token", {
    gateway: {
        intents: ClientIntents,
    }
});

client.commands = new Cache();

const loadModules = async () => {
    const commands = await readdir("commands/");
    for (const file of commands) {
        if (!file.endsWith(".js")) continue;

        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }

    const events = await readdir("events/");
    for (const file of events) {
        if (!file.endsWith(".js")) continue;

        const event = require(`./events/${file}`);
        client.on(event.name, (...args) => event.run(client, ...args));
    }
};

loadModules();
client.connect();