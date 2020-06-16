const { PlayerManager } = require("discord.js-lavalink");
const { nodes } = require("../../botconfig.json")

module.exports = bot => {
    console.log(`${bot.user.username} is online`);

    // global.lavalink = new PlayerManager(bot, nodes, {
    //     user: bot.user.id,
    //     shards: 0
    // });

    bot.user.setActivity(`For /verify Powered By TheGreatBot`, { type: "WATCHING" })

};
console.log(`
 █████╗ ███████╗██████╗  █████╗ ██████╗  █████╗ ████████╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝
███████║█████╗  ██████╔╝██║  ██║██████╦╝██║  ██║   ██║   
██╔══██║██╔══╝  ██╔══██╗██║  ██║██╔══██╗██║  ██║   ██║   
██║  ██║███████╗██║  ██║╚█████╔╝██████╦╝╚█████╔╝   ██║   
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚════╝ ╚═════╝  ╚════╝    ╚═╝   `)