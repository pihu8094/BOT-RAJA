const fs = require("fs");
module.exports.config = {
        name: "samose",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "samose",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("Samose")==0 || event.body.indexOf("samosa")==0 || event.body.indexOf("SAMOSE")==0 || event.body.indexOf("SAMOSA")==0) {
                var msg = {
                                body: "꧁•🦋✨🍁❉‌‌্᭄...─┼\n𝗢𝗪𝗡𝗘𝗥   ➻  𝐒ɧɣ𝗔ɱ 𝐃i͠Ꮗ𝗔ɳi͠ \n💚⟶‌‌𓆩〭〬༎🐰❉‌‌্᭄...꧂ \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐒𝐚𝐦𝐨𝐒𝐞\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/samosas_lover_here_|_Ricette,_Easy,_Crockpot(360P).mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
