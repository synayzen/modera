const codework = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  
  const TA = new codework.MessageEmbed()
  .setColor("BLACK")
  .setTitle(`${message.guild.name}`)
  .setFooter(`โ ๐๐๐๐ฎ๐๐ถ๐ป'๐ ๐ฐ๐ฟ๐ฒ๐ฒ๐ฑ  | Tรผm haklarฤฑ saklฤฑdฤฑr.`)
  .setImage(message.guild.iconURL())
  message.channel.send(TA)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucupp"],
}


exports.help = {
  name: 'sunucuresmi',
  description: '๐๐ฌ๐ฌ๐๐ฌ๐ฌ๐ข๐ง๐ฌ ๐๐ซ๐๐๐ ๐๐๐ฆ๐ข๐ฅ๐ฒ sunucu resmi',
  usage: 'sunucuresmi',
};
