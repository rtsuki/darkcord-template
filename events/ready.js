module.exports = {
    name: "ready",

    /**
     * 
     * @param {import("darkcord").Client} client 
     */
    run: (client) => {
        console.log(`Logged successfully in ${client.user.tag}!`);
    }
};