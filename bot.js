require("dotenv").config();

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
                msg.reply("\nHello I'am die bot these commands are currently available:\n" +
                          "```\\help : This page!\n" +
                          "\\roll [Amount] [Type]: Rolls [Amount] die of type [Type] eg \\roll 2 d20. ```"
                )
            }

            //die commands
            if(msg.content.substr(1,4) === "roll"){
                try {
                    var Amount = parseInt(msg.content.split(" ")[1]);
                    var Type = parseInt(msg.content.split(" ")[2].substr(1));
                } catch (error) {
                    msg.reply("Uh-oh Wrong arguments this command is used like this:\n"+ 
                    "```\\roll [Amount] [Type]: Rolls [Amount] die of type [Type] eg \\roll 2 d20. ```")
                }
                
                var result = "Results:\n";
                for(var i  = 0;i < Amount; i++){
                    result += (i+1) + " :" + (Math.floor(Math.random()*Type) + 1) + "\n"
                }
                msg.reply("\n" + result);
            }

        }
    }
});

client.login(process.env.DiscordApiKey);