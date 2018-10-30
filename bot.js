const Discord = require('discord.js')
const client = new Discord.Client()

console.log('Logged in')


client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('506697718454943744');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Voice Online: [ ${currentSize} ]`);
});

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('506697786209861644');
  const currentSize = message.guild.memberCount
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Member Count: [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Member Count: [ ${currentSize} ]`);
});


client.on('voiceStateUpdate', (old, now) => {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  const channel = client.channels.get('506699166018174977');
  const currentSize = "「" + day + "-" + month + "-" + years + "」"
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Date: [ ${currentSize} ]`);
  if (currentSize !== size) channel.setName(`Date: [ ${currentSize} ]`);
});

client.on('voiceStateUpdate', (old, now) => {
    setInterval(function() {

        var currentTime = new Date(),
        hours = currentTime.getHours() + 3 ,
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        years = currentTime.getFullYear(),
        month = currentTime.getMonth(),
        day = currentTime.getDate(),
        week = currentTime.getDay();
  
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }
  
    const channel = client.channels.get('506699272318746625');
    const currentSize = "「" + hours + ":" + minutes  +" " + suffix + "」"
    const size = channel.name.match(/\[\s(\d+)\s\]/);
    if (!size) return channel.setName(`Time: [ ${currentSize} ]`);
    if (currentSize !== size) channel.setName(`Time: [ ${currentSize} ]`);
  });

})
client.login(process.env.BOT_TOKEN)
