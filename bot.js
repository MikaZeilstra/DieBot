const Discord = require('discord.js');
const client = new Discord.Client();
const token = new require('token');

client.on("ready" , function(){
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', function() {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
});

client.login(token.getToken());