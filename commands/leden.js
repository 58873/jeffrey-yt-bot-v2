const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var ledenTotal = message.guild.memberCount;
    var bots = message.guild.members.cache.filter(m => m.user.bot).size;
    var people = ledenTotal - bots;
    var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;

    var ledenEmbed = new discord.MessageEmbed()
        .setTitle("✅**Leden Info**✅")
        .setColor("#0000FF")
        .addField("Leden", ledenTotal, true)
        .addField("Bots", bots, true)
        .addField("Mensen", people, true)
        .addField("Online", online, true)
        .setThumbnail("https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
        .setFooter("© created by JeffreyYT✅#2340", "https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
        .setTimestamp();

        

    message.channel.send(ledenEmbed);

}

module.exports.help = {
    name: "leden",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}