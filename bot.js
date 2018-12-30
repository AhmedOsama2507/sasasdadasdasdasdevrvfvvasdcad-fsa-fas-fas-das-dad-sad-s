const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"; 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`The Shadow for ever`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



    var prefix = "$";
 
client.on('message', function(msg) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };
 
  if(msg.content.startsWith ('$server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**__ Server Name | اسم السيرفر__**',`[** __${msg.guild.name}__ **]`,true)
    .addField('**__ OwnerShip | الاونر الاساسي__**',`**${msg.guild.owner}**`,true)
    .addField('**__ Server ID | ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('**__ Members Count | عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**__ Online | الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('**__ Verification Level | مستوي الحمايه__**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
    .addField('**__ Region | البلد__**',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**__ Text Channels | رومات كتابيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**__ Voice Channels | رومات صوتيه__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**__ Created At | صنع في __**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "cc") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **تم قفل الشات*');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
 
              }).then(() => {
                  message.reply("**تم قفل الشات :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "oc") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
 
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**تم فتح الشات**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
 
              }).then(() => {
                  message.reply("**تم فتح الشات :white_check_mark:**")
              });
    }
       
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ًں‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});
	
	
client.on('message', message => {
 
    if (message.content === "$bot") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()
 
.addField('**Bot Servers**',`[ ${client.guilds.size} ]`)
.addField('**Users**',`[ ${client.users.size} ]`)
.addField('**Channels**',`[ ${client.channels.size} ]`)
.addField('**ID**',`[ ${client.user.id} ]`)
.addField('**Name**',`[ ${client.user.tag} ]`)
.addField('Requested by:', "<@" + message.author.id + ">")
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
}
 
});;
	
	
	
	
client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ?    **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links  !**`)
    }
}
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "#roles"){
        if(message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
	
	
	
	

var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 10,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 3;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
 
} catch (error) {
console.log(error)
try {
guild.members.get(banner).removeRoles(roles);
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 3;
 if(channelc[channelcreate.id].created >= Onumber ) {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });
 
let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 10,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
client.on('message', message => {
    var prefix = "$";
   
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**اكتب شي بعد الكوماند**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» السيرفر :', `${message.guild.name}`)
                .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » الرسالة : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const channel = member.guild.channels.find("name", "✽-welcome");
     channel.send(`<@${member.user.id}> ** joined; ** Invited by ** <@${inviter.id}> ** `);
  });
});
	  
	  
	  
 1.36 KB
client.on('message', message => {
    var prefix = "$"
    if (message.content.startsWith(prefix + 'id')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**This Command Just In Servers**')
        message.guild.fetchInvites().then(invs => {
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id)
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0)
          var roles = message.member.roles.map(roles => `**__${roles.name}__ |**`).join(` `)
        let id = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(':clipboard: | User identity info')
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField('• Name :', message.author.username,true)
        .addField('• Tag :', message.author.discriminator,true)
        .addField('• ID :', message.author.id,true)
        .addField('• JoinedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• CreatedAt :', moment(message.joinedAt).format('D/M/YYYY h:mm a '),true)
        .addField('• Total invites :', inviteCount,true)
        .addField('• Roles :', roles)
        .setTimestamp()
        message.channel.sendEmbed(id).then(c => {
            c.react('📋')
                })
            })
        }
   
       
});

var prefix = "$"
client.on("message", (message) => {
    if (message.content.startsWith("${prefix}kick")) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('? ماعندك الصلاحيات');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + " مع السلامه :wave: ");
        }).catch(() => {
            message.channel.send("Error -_-");
        });
    }
});




var prefix = "$"
client.on('message', message => {
  if (message.author.xErenaa) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let bErenaalog = client.channels.find("name", "Erenaa-log");
 
  if(!bErenaalog) return message.reply("I've detected that this server doesn't have a Erenaa-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
	  
	  
	  
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
 
 

Save New Duplicate & Edit Just Text Twitter
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
const ms = require("ms");
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});
 
 
client.on('message',function(message) {
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
 if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {
           
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
       if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(4000))
       if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(4000))
       message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   }
});
 
client.login(process.env.BOT_TOKEN);
