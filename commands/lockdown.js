module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    await message.channel.overwritePremissions([

        {
            id : message.guild.roles.cache.find(r => r.name == "@everyone").id,
            deny: ['SEND_MESSAGES']
        }



    ]);

    message.channel.send("**Kanaal is in lockdown!**");

    
}


module.exports.help = {
    name: "lock",
}