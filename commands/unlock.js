const { MessageEmbed } = require('discord.js');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('unlock', 'moderation', []);
  }

  async run(client, message, args) {

    // Delete the message of the author.
    message.delete()

    // Check if the user has the permission to manage channels.
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      var embed = new MessageEmbed()
        .setDescription(`${config.no} | You don't have the permissions to unlock channels!!`)
        .setColor(config.noColor);
      return message.channel.send(embed);
    }

    // Set the (SEND_MESSAGES) permissions for @everyone to 'true'
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    })

    // Making / Sending the embed.
    var embed = new MessageEmbed()
      .setDescription(`**🔓 | Channel unlocked by: _${message.author.username}_!**`)
      .setTimestamp()
      .setColor(`#59f081`)
      .setFooter(config.footer, config.logo);
    return message.channel.send(embed);

  }
}

module.exports.help = {
    name: "unlock",
}