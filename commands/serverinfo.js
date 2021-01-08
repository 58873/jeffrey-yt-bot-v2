const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("✅**serverinfo**✅")
            .setDescription("")
            .setColor("#0000FF")
            .addField("**Je bent deze server gejoind op**", message.member.joinedAt)
            .addField("**Totaal memebers op de server**", message.guild.memberCount)
            .setThumbnail("https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
            .setFooter("© created by JeffreyYT✅#2340", "https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
            .setTimestamp();

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "serverinfo"
}
