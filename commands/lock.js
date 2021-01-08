const { MessageEmbed } = require('discord.js');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'moderation', []);
  }

  async run(client, message, args) {

    // Delete the message that the user sent.
    message.delete()

    // Check if the user has te permission to manage the channels.
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      var embed = new MessageEmbed()
        .setDescription(`${config.no} | You don't have the permissions to lock channels!!`)
        .setColor(config.noColor);
      return message.channel.send(embed);
    }

    // Set the (SEND_MESSAGES) permissions for @everyone to 'false'
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    })

    // Making the embed.
    var embed = new MessageEmbed()
      .setDescription(`**🔒 | Channel locked by: _${message.author.username}_!**`)
      .setTimestamp()
      .setColor(`#ff6666`)
      .setFooter(config.footer, config.logo);
    // Sending the embed.
    return message.channel.send(embed);

  }
}
module.exports.help = {
    name: "lock",
}