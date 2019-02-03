const Discord = require('discord.js');
const client = new Discord.Client();
const token =  require('token');

client.on("ready" , function(){
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', function(msg) {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
});

console.log((new token).getToken());
client.login((new token).getToken());