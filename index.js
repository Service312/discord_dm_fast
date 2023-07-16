const Discord = require('discord.js');
const { Id, token, prefix } = require('./config.json');
const Bot = new Discord.Client();({ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });

Bot.on("ready", () => {
  console.clear();
  console.log((`
  
  ██████╗ ███╗   ███╗     █████╗ ██╗     ██╗         
  ██╔══██╗████╗ ████║    ██╔══██╗██║     ██║         
  ██║  ██║██╔████╔██║    ███████║██║     ██║         
  ██║  ██║██║╚██╔╝██║    ██╔══██║██║     ██║         
  ██████╔╝██║ ╚═╝ ██║    ██║  ██║███████╗███████╗    
  ╚═════╝ ╚═╝     ╚═╝    ╚═╝  ╚═╝╚══════╝╚══════╝    
                                                     
    
                                          
                                                    
                      By service ( version beta )
                  Prefix: ${prefix}
  `))
  Bot.user.setActivity({ name: "je suis a la service de service :)", type: "PLAYING" });
});
Bot.on("message", message => {
  if (message.content.startsWith(prefix + 'dm')) {
    if (message.author.id != Id) {
      return message.reply('seul l\'owner a le droit de dm all')

    }
    else {
      message.delete
      args = message.content.split(" ").slice(1);
      var argresult = args.join(' ');

      message.guild.members.cache.forEach(member => {
        member.send(argresult).then(console.log(`${member.user.username}#${member.user.discriminator}`))
        .catch(err => console.error(`-----[DM bloqué]----- \n${member.user.username}#${member.user.discriminator}`));
        console.log(`Je viens de dm : `)
        
      })
      message.channel.send(`**OK je dm ! **`).then(message.delete({ timeout: 1000 }));
      console.log("je viens de lancé un dmall !")
    }
  }
})
Bot.login(token);
