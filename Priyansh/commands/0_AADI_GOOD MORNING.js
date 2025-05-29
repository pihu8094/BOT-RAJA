const fs = require("fs");
module.exports.config = {
	name: "GOOD MORNING",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "arif babu", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("GM")==0 || event.body.indexOf("Gm")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("GOOD MORNING")==0) {
		var msg = {
				body: "꧁•🦋✨🍁❉‌‌্᭄...─┼\n𝗢𝗪𝗡𝗘𝗥   ➻  𝐒ɧɣ𝗔ɱ 𝐃i͠Ꮗ𝗔ɳi͠ \n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂\n< ────────────────── >\n\n⎯꯭֯🌸⃪ ꯭⃛֯G❍❍𝐃 ɱ❍ɽηIIηG\n< ────────────────── >",
				attachment: fs.createReadStream(__dirname + `/noprefix/received_1083155713406602.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
