const Discord = require('discord.js')
const client = new Discord.Client()
var opus = require('opusscript');
let request = require(`request`);
let fs = require(`fs`);



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    console.log('Je suis ok')
  })

client.on('message', msg => {
  if (msg.content === 'µmemetest') {
    msg.reply('Je fonctionne')
  }
})

client.on('message', msg => {
  if (msg.content === 'µjoin') {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          msg.reply('Connexion reussie !');
        })
        .catch(console.log);
    } else {
      msg.reply('Pas sur un channel vocal');
    };
  }
});

client.on('message', msg => {
    if (msg.content === 'µokboomer') {
          msg.member.voiceChannel.join().then(connection => {
          const dispatcher = connection.playFile('music\ok.mp3')
          dispatcher.on('end', end => msg.member.voiceChannel.leave());
        }).catch(err => console.log(err))
      }
    })

    client.on('message', msg => {
      if (msg.content === 'µdejoin') {
        if (msg.member.voiceChannel) {
          msg.member.voiceChannel.leave()
        } else {
          msg.reply('Erreur');
        };
      }
    });


client.login(process.env.BOT_TOKEN)