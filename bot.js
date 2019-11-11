const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("643539350054895616")
setInterval(function() {
channel.send(`heloooooه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);