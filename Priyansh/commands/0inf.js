/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "info",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "kensu",
  description: "info bot owner",
  commandCategory: "Dành cho người dùng",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
                      hours = Math.floor(time / (60 * 60)),
                      minutes = Math.floor((time % (60 * 60)) / 60),
                      seconds = Math.floor(time % 60);
    const data = [
      "Bạn không thể tìm được lệnh admin tại 'help' của MintBot",
      "Đừng mong chờ gì từ MintBot.",
      "Cái đoạn này á? Của SpermBot.",
      "Nếu muốn không lỗi lệnh thì hãy xài những lệnh có trong help vì những lệnh lỗi đã bị ẩn rồi.",
      "Đây là một con bot được các coder của MiraiProject nhúng tay vào.",
      "Muốn biết sinh nhật của Mint thì hãy xài 'birthday'.",
      "Cặc.",
      "Cút.",
      "Lồn.",
      "Bạn chưa biết.",
      "Bạn đã biết.",
      "Bạn sẽ biết.",
      "Không có gì là hoàn hảo, MintBot là ví dụ.",
      "Mirai dropped.",
      "MintBot là MiraiProject nhưng module là idea của SpermBot.",
      "Bạn không biết cách sử dụng MintBot? Đừng dùng nữa.",
      "Muốn chơi game? Qua bot khác mà chơi đây không rảnh",
      "MintBot có thể hiểu phụ nữ nhưng không thể có được họ.",
      "MintBot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
      "https://i.imgur.com/WxlERJS.jpeg",
    ];

    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Karachi").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++} ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++} ${name1} - ${idNDH} `);
                }
            }
    var callback = () => 
      api.sendMessage({body:` 🇮🇳 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐒𝐇𝐘𝐀𝐌 𝐃𝐈𝐖𝐀𝐍𝐈 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇮🇳 

☄️𝐁𝐎𝐓 𝐍𝐀𝐌𝐄☄️  ${global.config.BOTNAME}

🔥𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🔥☞︎︎︎☜︎︎︎✰ 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗕𝗔𝗕𝗨💔🥀

🙈ʙᴏᴛ ᴀᴅᴍɪɴ ᴏᴡɴᴇʀ ꜰᴀᴄᴇʙᴏᴏᴋ ɪᴅ ʟɪɴᴋ 🙈➪ https://www.facebook.com/profile.php?id=100062282613155&mibextid=ZbWKwL 💞🕊️

👋𝔽𝕆ℝ 𝔸ℕ𝕐 𝕂𝕀ℕ𝔻 𝕆𝔽 ℍ𝔼𝕃ℙ ℂ𝕆ℕ𝕋𝔸ℂ𝕋 𝕆ℕ 𝕋𝔼𝕃𝔼𝔾ℝ𝔸𝕄 𝕌𝕊𝔼ℝℕ𝔸𝕄𝔼  👉 @Ravi23657543 😇

✧══════•❁❀❁•══════✧

🌸𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥♥️ ☞︎︎︎☜︎︎︎✰ 🅺︎🆁︎🅸︎🆂︎🅷︎🅽︎🅰︎

🥳🇺 🇵 🇹 🇮 🇲 🇪 🥳

🌪️ᴛᴏᴅᴀʏ ɪꜱ🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡ʙᴏᴛ ɪꜱ ʀᴜɴɪɴɢ⚡ ${hours}:${minutes}:${seconds}.

✅𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗜𝗡𝗚 ${global.config.BOTNAME} 𝗕𝗢𝗧🖤


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒𝐒𝐇𝐘𝐀𝐌 𝐃𝐈𝐖𝐀𝐍𝐈🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`, attachment: fs.createReadStream(__dirname + "/cache/kensu.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/kensu.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/kensu.jpg")).on("close", () => callback()); 
  }
};
