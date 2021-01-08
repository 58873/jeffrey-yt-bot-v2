const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var botEmbed = new discord.MessageEmbed()


    .setTitle("✅**Hallo**✅")
    .setDescription("**Hallo, Je bent welkom geheten!**")
    .setColor("#0000FF")
    .setThumbnail("https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
    .setFooter("© created by JeffreyYT✅#2340", "https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
    .setTimestamp();


    
    
    return message.channel.send(botEmbed); 

}

    





module.exports.help = {
    name: "hallo",
}