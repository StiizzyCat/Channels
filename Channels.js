const Discord = require('discord.js');
const fs = require("fs");
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const client = new Discord.Client()
const token = "Your Token here"
/*
Required Npm Packages

discord.js@11.6.4
chalk@4.1.1
prompt-sync
*/
client.on("ready", () => {
    client.login(token);
console.log("     ▄████▄   ██░ ██  ▄▄▄       ███▄    █  ███▄    █ ▓█████  ██▓      ██████ ")
console.log("    ▒██▀ ▀█  ▓██░ ██▒▒████▄     ██ ▀█   █  ██ ▀█   █ ▓█   ▀ ▓██▒    ▒██    ▒ ")
console.log("    ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▓██  ▀█ ██▒▒███   ▒██░    ░ ▓██▄   ")
console.log("    ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓██▒  ▐▌██▒▒▓█  ▄ ▒██░      ▒   ██▒")
console.log("    ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░▒██░   ▓██░░▒████▒░██████▒▒██████▒▒")
console.log("    ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▓  ░▒ ▒▓▒ ▒ ░")
console.log("      ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░░ ░░   ░ ▒░ ░ ░  ░░ ░ ▒  ░░ ░▒  ░ ░")
console.log("    ░         ░  ░░ ░  ░   ▒      ░   ░ ░    ░   ░ ░    ░     ░ ░   ░  ░  ░  ")
console.log("    ░ ░       ░  ░  ░      ░  ░         ░          ░    ░  ░    ░  ░      ░  ")
console.log("    ░                                                                        ")
console.log(chalk.bgMagenta('ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤv1.0 Coded By: https://github.com/StiizzyCatㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ'))
console.log(chalk.bgMagenta(`  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ Currently Logged in As ${client.user.tag}ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ`))
})
client.on("message", async message => {
            var chid = prompt(chalk.blue('Enter Guild Id:  '));
            const guild = client.guilds.get(chid)
            
            const TextChannels = guild.channels.filter(channel => channel.type === "text");

            TextChannels.forEach(channel => {
                console.log(chalk.green(`[T] ${channel.name} <id> ${channel.id} `))
        })
        const VoiceChannels = guild.channels.filter(channel => channel.type === "voice");

              VoiceChannels.forEach(channel => {
                console.log(chalk.yellow(`[V] ${channel.name} <id> ${channel.id} `))
        })
        console.log(chalk.red("FINISHED LOGGING ALL CHANNELS/VOICE CHANNELS"))
        process.exit()
})
client.login(token);
