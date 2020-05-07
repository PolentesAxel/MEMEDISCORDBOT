const Discord = require('discord.js')
const client = new Discord.Client()
var opus = require('opusscript');
let request = require(`request`);
let fs = require(`fs`);
var secretchannel;
secretchannel = "698859845037719643";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    console.log('Je suis ok')
  })

client.on('message', msg => {
  if (msg.content === '_memetest') {
    msg.reply('Je fonctionne')
  }
})

client.on('message', msg => {
  if (msg.content === '_join') {
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

//fonction en developpement (spam)
client.on('message', msg => {
    if (msg.content === '_secretcon') {
        const channel = client.channels.get(secretchannel);
        if (!channel) return console.error("The channel does not exist!");
        channel.join().then(connection => {
            // Yay, it worked!
            console.log("Successfully connected.");
        }).catch(e => {
            // Oh no, it errored! Let's log it to console :)
            console.error(e);
        });
    }
});

client.on('message', msg => {
    if (msg.content === '_secretdis') {
        const channel = client.channels.get(secretchannel);
        if (!channel) return console.error("The channel does not exist!");
        channel.leave()
    }
});

client.on('message', msg => {
    if (msg.content === '_okboomer') {
        msg.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('music/ok.mp3')
            dispatcher.on('end', end => msg.member.voiceChannel.leave());
        }).catch(err => console.log(err))
    }
})

client.on('message', msg => {
    if (msg.content === '_issou') {
        msg.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('music/issou.mp3')
            dispatcher.on('end', end => msg.member.voiceChannel.leave());
        }).catch(err => console.log(err))
    }
})


client.on('message', msg => {
    if (msg.content === '_xperror') {
        msg.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('music/xperror.mp3')
            dispatcher.on('end', end => msg.member.voiceChannel.leave());
        }).catch(err => console.log(err))
    }
})

client.on('message', msg => {
    if (msg.content === '_pornhub') {
        msg.member.voiceChannel.join().then(connection => {
            const dispatcher = connection.playFile('music/pornhub.mp3')
            dispatcher.on('end', end => msg.member.voiceChannel.leave());
        }).catch(err => console.log(err))
    }
})


client.on('message', msg => {
   if (msg.content === '_dejoin') {
      if (msg.member.voiceChannel) {
          msg.member.voiceChannel.leave()
      } else {
          msg.reply('Erreur');
      };
    };
})


client.login(process.env.BOT_TOKEN)
