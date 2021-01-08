const { MessageEmbed } = require('discord.js');
const { version } = require('../package.json');
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message, args) => {
 let totalSeconds = bot.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
    let cpu = Math.round(process.cpuUsage().system / 1024 / 1024).toString()
    if(cpu < 1) {
        cpu = (process.cpuUsage().system / 1024 / 1024).toFixed()
    }
    let ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  let uptime = ` ${days.toFixed()} days\n ${hours.toFixed()} hours\n ${minutes.toFixed()} min\n ${seconds.toFixed()} sec `;
    const embed = new MessageEmbed()
      .setTitle("__✅**STATUS**✅__")
      .setColor('#0000FF')
      .addField(':clock4: | **Uptime**', `${uptime}`, true)
      .addField(':chart_with_downwards_trend: | **Memory Usage**', `${ram} MB`, true)
      .addField(':page_facing_up: | **Version**', `v${version}`, true)
      .setThumbnail("https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")  
      .setFooter("© created by JeffreyYT✅#2340", "https://i.scdn.co/image/ab67706c0000bebb12d1a711a79106326fa56b85")
      .setTimestamp();    
    
    
    await message.channel.send({ embed });
    
}

module.exports.help = {
    name: "stats",
}
