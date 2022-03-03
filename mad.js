const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const allInvites = {}
const data = new Map()
const client = new Discord.Client()
const moment = require('moment-timezone')


client.on("ready", () => {

client.user.setPresence({
activity: {name:'unbirthdayparty',type:'WATCHING'},
status:"idle"
});
});


client.on('guildMemberRemove', member => {
	  console.log(`${member.guild.name} から ${member.displayName} が退出しました`)
 })

client.on('guildMemberRemove',(member) => {
	 // console.log(`${member.guild.name} から ${member} が退出しました`)
    console.log('seikou')
 })


client.on('message', message =>{
    if(message.author.bot){
        return;
   }
   if (message.content.match(/さむい/)) {
       let channel = message.channel;
       let author = message.author.username;
       let reply_text = `さむいって言うから寒いんだよ`;
       message.reply(reply_text)
           .then(message => console.log(`Sent message: ${reply_text}`))
           .catch(console.error);
       return;
}
else if (message.content.match(/あつい/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `あつすぎて溶けちゃいそうだ`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;
}else if (message.content.match(/たのしみ/)) {
    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `たのしもう！`;
    message.reply(reply_text)
        .then(message => console.log(`Sent message: ${reply_text}`))
        .catch(console.error);
    return;}

})

client.on('message', message => {
if(message.content === '!占い'){
let array = ["凶　えぇ、、、", "小吉　元気だして", "中吉　まあ、普通かな", "吉　いいねえ", "大吉　なんかいいことあるかも！"];
message.channel.send(array[Math.floor(Math.random() * array.length)]);
console.log(array[Math.floor(Math.random() * array.length)]);
}
})

//dice roll

client.on('message' , message => {
  if(message.content.match(/d/)){
    var cnt,Max;
    var dice=[];
    var S = 0;
    var numlist=[];
    dice =message.content.split('d');
    cnt= dice[0];
    Max= dice[1];
     for(var i = 0;i<cnt;i++){
     var num=Math.floor( Math.random() * (Max)+1);
     var  S =  S+num;
       numlist[i] = num;
     }
     if(isNaN (S)){
       message.channel.send('難しいことはわかんないよ');
       return;
     }
		  else if(cnt ==0||Max ==0 ){
       message.channel.send('0には何を掛けてもなんだぜ!!');
       return;
     }else if (S>0) {
       message.channel.send('出目は['+numlist.join(',')+']で\n合計は'+S+'です！！');

       return;
     }else {
       message.channel.send('素敵な組み合わせだ!!');
       return;
     }

  }
})


function diceroll(cnt,Max){


    for(var i = 0;i<cnt;i++){
    var num=Math.floor( Math.random() * (Max+1) );
    var  S =  S+num;
      numlist = num;
    }return;
  }

//目安箱

      client.on('message', async message => {
        if (message.content.startsWith('!g') && message.guild) {
        if (!message.member.hasPermission("administrator")) return message.channel.send('権限がありません')

 }
}
);

client.on('message', message =>
{
   if (message.channel.name === '投書口')
  {
    if (message.author.bot) return;
     if (message.attachments.size <= 0)
    {
       message.delete()

   }
  client.channels.cache.forEach(channel =>
 {
 if (message.attachments.size <= 0)
 {
 const embed = new Discord.MessageEmbed()
 .setAuthor(message.author.tag, message.author.avatarURL())
 .setDescription(message.content)
 .setColor(0x2C2F33)
 .setFooter(message.guild.name, message.guild.iconURL())
                     .setTimestamp()
                 if (channel.name === '目安箱')
    {
channel.send(embed)
return;
 }
  return;
   }

if (!message.attachments.forEach(attachment =>
 {
    const embed = new Discord.MessageEmbed()
     .setAuthor(message.author.tag, message.author.avatarURL())
                     .setImage(attachment.url)
                     .setDescription(attachment.url)
                     .setColor(0x2C2F33)
                     .setFooter(message.guild.name, message.guild.iconURL())
                     .setTimestamp()


  if (channel.name === '目安箱')
      {
                     channel.send(embed)
                     return;
                 }
                 return;
             }));
             return;
         });
     }
 })



client.login('bot token id')
