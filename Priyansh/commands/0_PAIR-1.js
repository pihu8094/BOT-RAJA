module.exports.config = {
        name: "pair",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "LEGEND ARYAN",
        description: "MADE BY LEGEND ARYAN",
        commandCategory: "Picture",
        cooldowns: 5,
        dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'lovely.png');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.ibb.co/h1fnNKSr/lovely.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/lovely.png");
    let pathImg = __root + `/pairing_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(258, 258), 116, 110).composite(circleTwo.resize(247, 247), 479, 115);

    let raw = await pairing_img.getBufferAsync("image/png");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports. run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
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

        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Tran Duc Bo";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: `𝐎𝐰𝐧𝐞𝐫 ➻   💐𝐌𝐑. 𝐊𝐑𝐈𝐒𝐇𝐍𝐀💐\n\n[•||•●•||•┼┼──🌸,,💟..#_𝕋𝕦𝕞𝕙𝕠 𝕂𝕠 𝕁𝕒𝕒𝕟  💟 ...💗 𝕊𝕖 #_ℙ𝕪𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒...💗 🥰𝔻𝕚𝕝 _💖 𝕂𝕒 𝕊𝕦𝕜𝕦𝕟_𝔸𝕒𝕟𝕜𝕙 𝕂𝕒 𝕋𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒 🥰... 🌸 #_𝔸𝕓 𝕋𝕦𝕞 𝕊𝕒𝕥𝕙 𝔻𝕠 𝕐𝕒 𝕄𝕒𝕥 𝔻𝕠 𝕍𝕠 𝔸𝕒𝕡𝕜𝕚 𝕄𝕒𝕣𝕛𝕚🐬__💖 #_ℍ𝕒𝕞𝕟𝕖 𝕋𝕠 𝕒𝕒𝕡𝕜𝕠 𝕁𝕚𝕟𝕕𝕖𝕘𝕚 𝕂𝕒 𝕊𝕒𝕣𝕒 𝔹𝕒𝕟𝕒 𝕃𝕚𝕪𝕒•||•🐬•||•]]\n\n✦ ━━━━━━━ 💝 ━━━━━━━ ✦\n\n[•||•●•||•┼┼──🌸,,💟..# 𝗗𝗲𝗸𝗵𝗼 𝗧𝘂𝗺𝗵𝗿𝗮 𝗝𝗶𝘃𝗮𝗻 𝗦𝗮𝘁𝗵𝗶 𝗠𝗶𝗹 𝗚𝗮𝘆𝗮 𝗛𝗮𝗶 🙂🖐️𝗔𝗯 𝗠𝘂𝗷𝗵𝗲 𝗕𝗮𝗿 𝗕𝗮𝗿 𝗦𝗶𝘁𝘁𝗶𝗻𝗴 𝗞𝗮𝗿𝘄𝗮𝗻𝗲 𝗞𝗲 𝗟𝗶𝘆𝗲 𝗠𝗮𝘁 𝗞𝗮𝗵𝗼 👈😒\n✧═════════•❁❀❁•═════════✧\n${namee}\n💓\n${name}\n✧═════════•❁❀❁•═════════✧\n➥𝗟𝗼𝘃𝗲 𝗥𝗮𝘁𝗶𝗼: ${tle}%\n✧═════════•❁❀❁•═════════✧\n 🩵𝗠𝗔𝗗𝗘 𝗕𝗬 🩷\n✧═════════•❁❀❁•═════════✧\n💝𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗕𝗔𝗕𝗨 💝◈ ──── 💚✨- 」
`, mentions: arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
}
