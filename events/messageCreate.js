const PREFIX = "BOT Prefix";

module.exports = {
    name: "messageCreate",
    
    /**
     * 
     * @param {import("darkcord").Client} client 
     * @param {import("darkcord").Message} message 
     */
    run: (client, message) => {
        if (
            message.user.bot || 
            message.content.toLowerCase().indexOf(PREFIX) !== 0
        ) return;

        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        const command = client.commands.find(c => c.name === cmd || c.aliases?.includes(cmd))[1];
        if (!command) return;
        
        command?.run(client, message, args);
    }
};