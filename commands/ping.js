const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   message.channel.send(":ping_pong: Pong! " + (message.createdTimestamp - Date.now()) + "ms")
}

module.exports.help = {
   name: "ping",
   description: "Kijk hoe snel je internet is."
}
