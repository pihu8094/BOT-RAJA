module.exports.config = {
  name: "pair2",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "0Pairing",
  commandCategory: "Love1", 
  usages: "pair2", 
  cooldowns: 0
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        // var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 1) api.sendMessage("You need 500 USD for 1 pairing, please use ${global.config.PREFIX}work to received money or ask for admin bot!\n🤑Theres something new to eat🤑",event.threadID,event.messageID)
        else {
         var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        // api.changeNickname(`😘👉🔐🔐 ${name} Property 🔐🔐👈😘`, event.threadID, event.senderID);
        // api.changeNickname(`😘👉🔐🔐 ${namee} Property🔐🔐👈😘`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍🦰" : "Trần Đức Bo";
        // Currencies.setData(event.senderID, options = {money: money - 500})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

          let gifLove = (await axios.get( `https://i.ibb.co/1GRPmxdC/Messenger-creation-3599108077065788.webp`, { responseType: "arraybuffer" } )).data; 
              fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );
          
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `𝐎𝐖𝐍𝐄𝐑 ➻  𝐊𝐑𝐈𝐒𝐇𝐍𝐀 🌸\n\n[•||•●•||•┼┼──🌸,,💟..𝐀𝐧𝐤𝐡𝐨 𝐦𝐞 𝐛𝐚𝐬𝐚𝐥𝐮 𝐭𝐮𝐣𝐡𝐤𝐨. 💟 ...💗 𝐒𝐡𝐞𝐞𝐬𝐡𝐞 𝐦𝐞 𝐭𝐞𝐫𝐚𝐝𝐞𝐞𝐝𝐚𝐫 𝐡𝐨...💗 🥰•||•🐬•||•]]\n✦ ━━━━━━━ 💝 ━━━━━━━ ✦\n[•||•●•||•┼┼──🌸🌿 𝐀𝐤 𝐰𝐚𝐪𝐭 𝐞𝐬𝐚 𝐚𝐲𝐞 𝐣𝐢𝐧𝐝𝐠𝐢 𝐦𝐞 𝐤𝐢...💚 ,💜.. 𝐭𝐮𝐣𝐡𝐤𝐨 𝐯 𝐡𝐮𝐦𝐬𝐞 𝐩𝐲𝐚𝐫 𝐡𝐨 ..💜 ♥️✨  •||•🌸•||• ]]\n✦ ━━━━━━━ 💝 ━━━━━━━ ✦\n➻ 𝐍𝗔ɱɘ ✦  ${namee} \n\𝐧𝐋𝐄𝐕𝐄𝐋🌸: 〘${tle}〙\n\n➻ 𝐍𝗔ɱɘ ✦  ${name} \n✦ ━━━━━━━ 💝 ━━━━━━━ ✦\n🌸🍁🐬😘🥰❤️', mentions: arraytag, attachment: imglove}  
         return api.sendMessage(msg, event.threadID, event.messageID)
      }
}
