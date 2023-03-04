module.exports = {
    name: "ping",
    aliases: ["pong"],

    /**
     * 
     * @param {import("darkcord").Client} client 
     * @param {import("darkcord").Message} message 
     */
    run: async (client, message) => {
        return await message.reply({ content: `:ping_pong: | My ping is: ${client.websocket.ping}ms!` });
    }
};