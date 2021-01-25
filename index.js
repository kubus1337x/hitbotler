const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const now = new Date();
const rok = now.getFullYear()
const miesiac = now.getMonth()
const dzien = now.getDate()
const godzina = now.getHours()
const minuta = now.getMinutes()
const sekunda = now.getSeconds()

client.on('ready', () => {
  console.log(`Pomyślnie uruchomiono bota: ${client.user.tag}!`);
  client.user.setActivity('Holocaust', { type: 'WATCHING' })
    .catch(console.error);
});

client.on('message', msg => {
  if (msg.content === `${config.prefix}kordian`) {
    msg.channel.send(`Jest ${dzien}.${miesiac+1}.${rok} godzina ${godzina}:${minuta}:${sekunda} a kordian wpierdala kolejnego big maka`)
  }
  else if (msg.content === `${config.prefix}gruba`) {
    msg.channel.send(`Gruba pijesz?`)
  }
});

client.login(config.token);