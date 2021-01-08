const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.reply("**Verbind met een spraak kanaal**");

    if(message.guild.me.voice.channel) return message.channel.send("**sorry de bot is al in het kanaal**");

    if(!args[0]) return message.reply("Geef een url op");

    var validate = await ytdl.validateURL(args[0]);
    if(!validate) return message.channel.send("**Geef een juist url op**");

    var info = await ytdl.getInfo(args[0]);
    
    var options = {seek: 5, volume: 1, bitrate: 12800000 };





    var channelJoin = message.member.voice.channel.join()
        .then(voiceChannel => {

            var stream = ytdl(args[0], {filter: 'audioonly' });
            var dispatcher = voiceChannel.play(stream, options);  
         
        }).catch(console.error);

        var song = new discord.MessageEmbed()
        .setTitle("✅**Music**✅")   
        .setColor("#0000FF")
        .setFooter(`© created by JeffreyYT✅#2340`, "https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
        .setTimestamp()  
        .setDescription(`**De volgende commands horen bij het music command!: | !play | !leave |**`);
    
      message.channel.send(song);
        
}

module.exports.help = {
    name: "play",
}
