const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.reply("**Verbind met een spraak kanaal**");

    if(message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send("sorry je bent niet verbonden met het zelfde kanaal");

    message.guild.me.voice.channel.leave();




   
        
}

module.exports.help = {
    name: "leave",
}
