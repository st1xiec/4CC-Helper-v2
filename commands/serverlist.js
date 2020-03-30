const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
 
let embed = new Discord.RichEmbed()
    .setColor("#00CC66")
    .addField("Сервера:", bot.guilds.map(x => `| **NAME: ${x.name}** | \n| **ID: ${x.id}** | \n| **MEMBERS: ${x.memberCount}** |\n`) )
    .setFooter(message.author.tag,message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed)

}

module.exports.help = {
    name: "serverslist",
    aliases: ["sl", "сл", "гдебот", "ыукмукыдшые"],
    description: 'Получить информацию о сервере',
    usages: { '!serverslist': 'Получить информацию о сервере' },
    category: 'Информация'
}; 