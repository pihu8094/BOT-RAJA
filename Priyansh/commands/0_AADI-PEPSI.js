const fs = require("fs");
module.exports.config = {
        name: "pepsi",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "pepsi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("pepsi")==0 || event.body.indexOf("Pepsi")==0 || event.body.indexOf("PEPSI")==0 || event.body.indexOf("Coldaring")==0) {
                var msg = {
                                body: "꧁•🦋✨🍁❉‌‌্᭄...─┼\n𝗢𝗪𝗡𝗘𝗥   ➻  𝐒ɧɣ𝗔ɱ 𝐃i͠Ꮗ𝗔ɳi͠ \n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂ \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐏𝐄𝐏𝐒𝐈\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Pin_di_Shoaib_nazir_su_Quick_Saves(360P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥂", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
