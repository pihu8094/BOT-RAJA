const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

       var tl = ["💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍👈"];
      var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("PaPa Ki BaRaT Me aYa kYa Jo SiTi BaJa ReHa 😂😂", threadID);
   };

    if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Ari  mori  maiyya  e  ka  dekh  liyo  👻💀", threadID);
   };

   if
((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈")) {
     return api.sendMessage("【＿ 𝐇𝐲𝐞 𝐇𝐨𝐖 𝐃𝐢𝐃 𝐓𝐡𝐄 𝐏𝐞𝐢𝐦𝐋𝐭𝐈𝐯𝐄 𝐌𝐚𝐍 𝐂𝐨𝐦𝐄 𝐎𝐮𝐓 𝐨𝐅 𝐓𝐡𝐚 𝐙𝐨𝐨 ? 𝐆𝐨 𝐓𝐨 𝐓𝐡𝐞 𝐙𝐨𝐨 𝐀𝐠𝐚𝐢𝐍 . 𝐖𝐚𝐡𝐓 𝐀𝐫𝐞 𝐘𝐨𝐮 𝐃𝐨𝐈𝐧𝐆 𝐎𝐮𝐓𝐬𝐈𝐝𝐄 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("#𝐒𝐈𝐌", threadID);
   };


if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️️sab  dekh  rahe  hai  brna  bhot  kiss  deti 🙈", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("️KYa  Soch  Rhy  🤔  Koi  NaHi  PatGa 😝", threadID);
   };


   if ((event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋")) {
     return api.sendMessage("DakHo  DakHo  Kon  AaYa  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  AaYa  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮  AaYa", threadID);
   };

   if ((event.body.toLowerCase() == "kya kr rahe ho") || (event.body.toLowerCase() == "KYA KR RAHE HO") || (event.body.toLowerCase() == "kya kar rahe ho") || (event.body.toLowerCase() == "Kya kar raha hai bot")) {
     return api.sendMessage( "KucH NaHi MeRi JaaN AppSe BaaT KaR ReHa Hu",threadID);

   };

   if ((event.body.toLowerCase() == "bot hume kon banaya") || (event.body.toLowerCase() == "tume kis ne banaya hai")) {
     return api.sendMessage("𝐎𝐰𝐧𝐞𝐫 ➻  🥀  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🥀", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon hai")) {
     return api.sendMessage("𝐎𝐰𝐧𝐞𝐫 ➻  🥀  𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🥀", threadID);
   };

   if ((event.body.toLowerCase() == "uff") || (event.body.toLowerCase() == "UFF")) {
     return api.sendMessage("🌸== 𝐇𝐲𝐄 𝐓𝐞𝐑𝐢 𝐮𝐅𝐅 𝐌𝐞𝐑𝐞  😍 ___ 𝐀𝐀𝐃𝐈 𝐁𝐀𝐁𝐔 ___ 😍 𝐁𝐨𝐒𝐬 𝐅𝐢𝐃𝐚 𝐇𝐨 𝐆𝐚𝐘𝐞😁", threadID);
   };

   if ((event.body.toLowerCase() == "call aao") || (event.body.toLowerCase() == "Call aao?")) {
     return api.sendMessage("📞==🌸 𝐌𝐚𝐈 𝐂𝐚𝐋𝐋 𝐊𝐚𝐈𝐬𝐄 𝐀𝐨𝐎 𝐌𝐚𝐈 𝐓𝐨 𝐁𝐨𝐓 𝐇𝐮 𝐍𝐚 _🥺👈🤸‍♂️", threadID);
   };


   if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "🙏")) {
     return api.sendMessage("⎯ⷨ͢⟵͇̽💗⃪꯭ⷯ༆⁂𝄄❘⍣ 𝐌𝐀𝐈𝐍 𝐓𝐎 𝐑𝐀𝐃𝐇𝐀 𝐑𝐀𝐍𝐈 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐀 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄  ⎯᪵⎯꯭̽𝆺꯭𝅥🌿꯭",threadID);
   };

if ((event.body.toLowerCase() == "🤲") ||(event.body.toLowerCase() == "Assalamu alaikum")) {
     return api.sendMessage("Walekum assalam", threadID);
   };

  if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲")) {
    return api.sendMessage("️Ase  Muu  BaNa  KRr  MT  R0o  😒", threadID);
   };

   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😐😐😐") || (event.body.toLowerCase() == "😐😐😐😐")) {
     return api.sendMessage("BolTi  BanD  Ho  GaYi  Na  Abb  Bolo  😆", threadID);
   };

  if
((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("️Anek WaLa Jin 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋")) {
     return api.sendMessage("𝐌𝐄𝐑𝐈 𝐊𝐈𝐒𝐒 𝐘𝐀𝐌𝐌𝐘 𝐇𝐀𝐈 𝐍𝐀 😂", threadID);
   };

   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("️【＿ 𝐉𝐚𝐁𝐚𝐍 𝐀𝐧𝐃𝐚𝐑 𝐊𝐚𝐑𝐨 𝐁𝐚𝐑𝐧𝐀  ___𝐀𝐀𝐃𝐈 __𝐁𝐀𝐁𝐔 __ 𝐒𝐞 𝐊𝐡𝐀 𝐊𝐞 𝐊𝐚𝐓𝐛𝐀 𝐃𝐮𝐍𝐠𝐀 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "main hu") || (event.body.toLowerCase() == "Jaan")) {
     return api.sendMessage("️【＿ 𝐇𝐦𝐌 𝐌𝐞𝐑𝐢 𝐉𝐚𝐀𝐧 𝐁𝐨𝐋𝐨 𝐁𝐚𝐁𝐮 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "Land")) {
     return api.sendMessage("️𝐆𝐚𝐍𝐝 𝐌 𝐉𝐲𝐀𝐝𝐀 𝐊𝐡𝐔𝐋𝐢 𝐇𝐚𝐢 𝐓𝐨𝐇 𝐁𝐚𝐍𝐚𝐍𝐚 𝐔𝐧𝐃𝐚𝐑 𝐋𝐞 𝐋𝐞 ", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡")) {
     return api.sendMessage("BaBe  Ase  GuSsa  Nhi  KrTy  Naw  Le  L0o  Umumuaahhhhh 😘😘😘", threadID);
   };

   if ((event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("𝐒𝐇𝐀𝐊𝐀𝐋  😒  𝐀𝐂𝐇𝐈   𝐍𝐀𝐇𝐈  🤭  𝐓𝐎  𝐊𝐀𝐌  𝐒𝐄  𝐊𝐀𝐌  🙄  𝐇𝐀𝐒  𝐓𝐎  𝐀𝐂𝐇𝐀  𝐋𝐈𝐘𝐀  𝐊𝐑 😔", threadID);
   };

   if ((event.body.toLowerCase() == "🔥") || (event.body.toLowerCase() == "🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥") || (event.body.toLowerCase() == "🔥🔥🔥🔥")) {
     return api.sendMessage(" 𝐀𝐚𝐆 𝐋𝐚𝐆𝐚 𝐃𝐢 𝐈𝐬𝐍𝐞 𝐆𝐫𝐎𝐮𝐏 𝐌𝐚𝐈 𝐁𝐡𝐀𝐠𝐎𝐀𝐀𝐆 𝐋𝐀𝐆𝐀 𝐃𝐈 𝐈𝐒𝐍𝐄 𝐆𝐑𝐎𝐔𝐏 𝐌𝐀𝐈𝐍 𝐁𝐇𝐀𝐆𝐎 ", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("🌸== 𝐌𝐚𝐈 𝐓𝐨 𝐌𝐚𝐒𝐭 𝐇𝐮 𝐀𝐚𝐏 𝐁𝐚𝐓𝐚𝐎 𝐊𝐚𝐈𝐬𝐄 𝐇𝐨 ___😗𒁍•🦋🙃 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("Kya   Hua  AaNkHo   Me  NaMi  KeSe  🥺 ", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛🥰आदि बाबू❤️ *★᭄ ཫ༄𒁍≛ 』====🌸__💙 Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot go to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("🌸====『*★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀  ཫ༄𒁍≛आदि❤️बाबू❤ *★᭄ ཫ༄𒁍≛ 』====🌸__💙I'm a bot, you're the one who should go to sleep <3 ＿】", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("", threadID);
   };

   if ((event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("Nak  T0o  Thi  Nhi  Muu  Be  Gyb  H0o  GYa  TeRa  😂😂😂", threadID);
   };

   if ((event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😳")) {
     return api.sendMessage("️Aby  Bhens  Chor  KYa  GYa  😳😳😳", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `${name}     ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
