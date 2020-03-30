const Discord = module.require('discord.js');
module.exports.run = async (bot, message, args) => {
    try {
      const guild = bot.guilds.get(args[0])
      const msg = args.slice(1).join(" ")
      const channel = guild.channels.filter(c => c.memberPermissions(guild.me).has("SEND_MESSAGES") && c.type === "text").first()
      if(channel) channel.send(msg)
    } catch (err) {
        bot.logsErr(err)
    }
};
module.exports.help = {
    name: 'allsay',
    aliases: ['всемсказать', 'всемскажи', 'аллсей', 'аллсау', 'ас'],
    description: 'Отправить сообщение от имени бота',
    category: 'Создатель',
}