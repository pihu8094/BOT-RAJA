module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄𝐒𝐓𝐒𝐓  🤖 👈\n✧═════════•❁❀❁•═════════✧\n 💝🥀𝐎𝐖𝐍𝐄𝐑 :-  ☞कृष्णा बाबू☜\n✧═════════•❁❀❁•═════════✧\nफेसबुक 🆔 :- 👇\n\nhttps://www.facebook.com/profile.php?id=61573328623221\n✧═════════•❁❀❁•═════════✧\n बोट रेस्टोत हो रहा है प्लीज़ वेट`, threadID, () => process.exit(1));
}
