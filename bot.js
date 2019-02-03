const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready" , function(){
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', function(msg) {
    //check if the message is send in the dnd channel and a command for the bot
    if(msg.channel.id === "538714873132220419"){
        if(msg.content.substr(0,1) === "\\"){
            /*************
            Check command
            *************/

            //help command
            if(msg.content.substr(1,4) === "help"){
                msg.reply("\nHello I'am dice bot these commands are currently available:\n" +
                          "```\\help : This page!\n" +
                          "\\die [Type] [Amount]: Rolls [Amount] die of type [Type]. ```"
                )
            }

            //die commands
            if(msg.content.substr(1,3) === "die"){
                msg.reply("")
            }

        }
    }
});

client.login(process.env.DiscordApiKey);