require("dotenv").config();

const scheduler = requrie("node-scheduler"); 

const Discord = require('discord.js');
const client = new Discord.Client();

var Schedules = new Map();

client.on("ready" , function(){
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', function(msg) {
    if(msg.content.substr(0,1) === "\\"){
        /*************
        Check command
        *************/

        //help command
        if(msg.content.substr(1,4) === "help"){
            msg.reply("\nHello I'am die bot these commands are currently available:\n" +
                      "```\\help : This page!\n" +
                      "\\roll [Amount] [Type]: Rolls [Amount] die of type [Type] eg \\roll 2 d20.\n"+ 
                      "\\schedule [Name of schedule] [date]: Second:Minute:Hour:Month:DayOfWeek \"[MessageToPrint]\" eg. \\schedule Example 0:0:0:*:0 \"I run at the start of each sunday\"```"
            )
        }

        //Schedule command
        if(msg.content.substr(1,8) === "schedule"){
            try{
               var content = msg.content.split(" ");
               var name = content[1];
               var date = content[2].split(":");
               var message = content.match("/\"([^']+)\"/");
            
               schedules.set(name, scheduler.scheduleJob(date[0] + " " + date[1]+ " " + date[2] + " " + date[3]+ " " + date[4] +" "+ date[5], function(){
                msg.channel.send(message);
               }));
            } catch(error) {
                msg.reply("Uh-oh Wrong arguments this command is used like this:\n"+ 
                "```\\schedule [Name of schedule] [date]: Second:Minute:Hour:Month:DayOfWeek \"[MessageToPrint]\""+
                    "\n eg. \\schedule Example 0:0:0:*:0 \"I run at the start of each sunday\"```)");
                return;
            }
        }

        //die commands
        if(msg.content.substr(1,4) === "roll"){
            try {
                var Amount = parseInt(msg.content.split(" ")[1]);
                var Type = parseInt(msg.content.split(" ")[2].substr(1));
            } catch (error) {
                msg.reply("Uh-oh Wrong arguments this command is used like this:\n"+ 
                "```\\roll [Amount] [Type]: Rolls [Amount] die of type [Type] eg \\roll 2 d20. ```");
                return;
            }
                
            var result = "Results:\n";
            for(var i  = 0;i < Amount; i++){
                result += (i+1) + " :" + (Math.floor(Math.random()*Type) + 1) + "\n"
            }
            msg.reply("\n" + result);
        }
    }
});

client.login(process.env.DiscordApiKey);