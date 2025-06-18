module.exports.config = {
	name: "botinfo",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "RAVI KUMAR", //don't change the credits please
	description: " Bot info.",
	commandCategory: "system",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.ibb.co/wVk4Ymn/20250618-133824.jpg"];
var callback = () => api.sendMessage({body:`𝐎𝐖𝐍𝐄𝐑 :- 𝐌𝐑.𝐊𝐑𝐈𝐒𝐇𝐍𝐀 ===\n\n☄️𝘽𝙊𝙏𝙉𝘼𝙈𝙀☄️ »» ${global.config.BOTNAME}\n🌸𝙋𝙍𝙀𝙁𝙄𝙓🌸  »» ${global.config.PREFIX} ««\n\n🥳𝙐𝙋𝙏𝙄𝙈𝙀🥳\n\n𝑫𝑨𝑻𝑬 𝑨𝑵𝑫 𝑻𝑰𝑴𝑬 \n${juswa}\n\n⚡𝘽𝙊𝙏 𝙄𝙎 𝙍𝙐𝙉𝙉𝙄𝙉𝙂⚡ \n🕛${hours}:${minutes}:${seconds}🕧.
...
`,attachment: fs.createReadStream(__dirname + "/cache/krishna1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/krishna1.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/krishna1.jpg")).on("close",() => callback());
   };
