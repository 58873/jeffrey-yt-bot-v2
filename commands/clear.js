const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   // !clear 21

   if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Helaas! Jij mag dit niet doen. Je moet helper of hoger zijn om dit te mogen doen!").then(msg => msg.delete(3000));

   if (!args[0]) return message.reply("Geef een aantal berichten op.")

   if (Number.isInteger(parseInt(args[0]))) {

      var amount = parseInt(args[0]) + 1;

      message.channel.bulkDelete(amount).then(() => {

         if (args[0] == 0) {

            message.channel.send("Ja daaaag! Ik kan toch niet 0 berichten verwijderen?!?!").then(msg => msg.delete(5000));

         } else if (args[0] == 1){

            message.channel.send(`Ik heb 1 bericht verwijderd.`).then(msg => msg.delete(3000));

         } else {

            message.channel.send(`Ik heb ${args[0]} berichten verwijderd.`).then(msg => msg.delete(3000));

         }
      });

   } else {
      return message.reply("Geef een getal op")
   }


}

module.exports.help = {
   name: "clear",
   description: "Verwijder berichten",
   category: "admin"
}