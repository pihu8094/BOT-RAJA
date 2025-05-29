const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "KRISHNA",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

      var tl = ["💋 बस यूँ ही पूछना था 😕 कि हर रोज जो मेरी नींद चुराते हो 😏 उसका तुम करते क्या हो…..? 🤔👈" , "💋 प्लीज आप आर्मी ज्वाइन कर लीजिये 👮क्यूंकि आपको देखकर 👀 दुश्मन ऐसे ही घायल हो जायेंगे...🤭🤭👈" , "💋 आप अपने पंख कहाँ छुपाते हो 🤔 क्योंकि आप एक परी जैसे लगते हो....🙈🙈👈" , "💋 प्यार तो करते नहीं तुम 😒 दुआ करो मुझे कोई और पटा ले...😕😕👈" , "💋 Ak 47 की जरुरत तो 🙂 हम लोगों को है 🤐 तुम्हारी तो आँखे ही काफी है 😛 कतल करने के लिए....😇😇👈" , "💋 इश्क़ को रहने दीजिये ज़नाब 🙂 फलर्टी कीजिये सुकून मिलेगा....😜😜👈" , "💋 सांवला रंग ☺️ गरम मिज़ाज 🤐 मीठी आवाज 🙊 और कडक तेवर 😁 तुम अपना नाम बदल के चाय क्यों नही रख लेते.….😀😀👈" , "💋 तुझे आई लव यू बोल तो दूँ 🙈 पर तू अपने भय्या को बुला लेगी फिर 🥺 दुनिया वाले कह देंगे कि 🙄 जीजा ने अपने साले को पिट दिया....😒😒👈" , "💋 मैं अभी सिंगल हूँ 🙂 और तुम भी 😒 चलो आज कुछ मिंगल करते है....🙂🤟" , "💋 लगता है आपके पास मेरी बीमारी की दवा है  शायद 🤔 जिसे लोग लोवेरिया कहते हैं....😅😅👈" , "💋 तुम्हारे दिल का 💖 Hotspot ऑन है शायद 😸 क्यूँकि मेरे दिल का 💗 WiFi बार बार तुमसे 🤦 कनेक्ट हो रहा है....!! 😏😏👈" , "💋 आपके पास नक्शा है क्या…? 🤔 क्योंकि मैं आपकी आँखों में खो गया हूँ....!! 🙃🙃👈" , "💋 जल्दी से कोई भगवान 🙆 को बुलाओ क्यूकी ☹️ एक परी खो गयी हैं 😱 और वो परी यहा मुझसे चेटिंग कर रही हैं....!! 🙈🙈👈" , "💋 तुम्हारे प्यार का इन्वेर्टर 😇 जब से इस दिल में लगाया है 💘 तब से इस दिल की बैटरी लो नहीं होती है....!! 🙈🙈👈" , "💋 यार आपकी बाते सुन कर 😱 तो मुझे आपको मेरी जानू बनोगी 🤯 आवार्ड देने का मन कर रहा है....!! 😃😃🤟" , "💋 आपके पापा एअर फोर्स मे थे क्या 🤔 क्यूँकि आप एक बम की तरह हो...!! 😕😕👈" , "💋 डॉक्टर ने एडवाइस किया है 😒 की सोने से पहले 🙄 आपकी फोटो देख कर सोना जरुरी है 🙈 वरना हार्ट अटैक आ सकता है....!! 🤕🤕👈" , "💋 कार में पोलिश कर के भी 😵 कार उतनी शाइन नहीं करती ☹️ जितना तुम बिना मेकअप के करती हो....!! 😌😌👈" , "💋 क्या आप एक जादूगर हो 🤔 क्यूकी जब भी आपको देखता हूँ 🧐 बाकी सब गायब हो जाता हैं....!! 😒😒👈" , "💋 जादू सीख रहा हूँ 😇 किसी शहजादी को 👰 कब्जे में करना है....!! 🙂🤟" , "💋 वर्ल्डकप जित ने पर 🙂 इतनी खुशी नहीं मिलती ☹️ जितनी आपसे बात कर के मिलती है...!! 😁🤟" , "💋 आपके हाथ काफी भारी है 😑 चलो इन्हें मैं पकड़ लेता हूँ....!! 😊😊🤟" , "💋 आप चोरो के राजा लगते हो 😎 क्यूँकि आपने मेरा दिल चुरा लिया हैं....!! 🤕🤕👈" , "💋 जितना नशा तुम्हे 👀 देखकर मुझे होता है 😵‍💫 उतना नशा तो पूरा बियर 🍺 बार पीकर भी नहीं हो सकता....!! 😕😕👈" , "💋 चलो आज मैं तुम्हें एक किस देता हूँ 😘 अगर तुम्हें पसंद ना आये 😒 तो कल तुम मुझे वापस लौटा देना....!! 🙈🙈👈" , "💋 तुम्हारे दिल में वैक्यूम क्लीनर भी लगा है क्या 🤔 क्यूँकि बहुत साफ दिल है तुम्हारा....!! 😀🤟" , "💋 अपने हसीन होंठों 👄 को किसी परदे में छुपा लिया करो 😜 हम गुस्ताख लोग हैं 🤤 नज़रों से भी चूम लिया करते हैं...!! 😚😚👈" , "💋 चारों दिशाओं में 🙂 शंख बजेगा 🥳 मैं तेरा था 😌 तेरा हूँ और तेरा ही रहूंगा..…!! 😘😘👈" , "💋 लत तेरी ही लगी है 😗 नशा सरेआम होगा 🥲 हर लम्हा मेरे लबों पे 🙂 सिर्फ प्रेम का ही नाम होगा....!!😙😙👈" , "💋 जानलेवा है 🥴 उसका सावला रंग 👰🏽‍♂️ और मै शौकिन भी कड़क चाय का हूँ...!! 😛😛👈" , "💋 मेरे इश्क की 🥲 तू कर ले चाहे कितनी भी आजमाइश 🥺 तू ही मेरा पहला इश्क है 🥰 और तू ही मेरी आख़िरी ख्वाहिश...!! 🙈🙈👈" , "💋 उसे मेरी आँखें 👀 पसन्द है और मुझे 😗 उसकी आँखों में 😊 मेरे नाम का काजल...!! 🙈🙈👈" , "💋 मुझे तो तुमसे नाराज़ ☹️ होना भी नहीं आता 😏 ना जाने तुमसे मैं कितनी 🤗 मोहब्बत कर बैठा हूँ....!! 😍😍👈" , "💋 तुझे देखने का जुनून 🤠 और भी गहरा होता है 😗 जब तेरे चेहरे पे 🤤 ज़ुल्फ़ों का पहरा होता है...!! 🙂🙂👈" , "💋 यूँ तो दिल 💝 और नियत से साफ है हम 🥲 बस शब्दों में थोड़ी शरारत 😜 लिए फिरते है हम...!! 😛😛👈" , "💋 वक्त मेरा हो ना हो 🥺 मैं हर वक्त तेरा हूँ...!! 🤗🤗👈" , "💋 धड़कने भी बेचैन रहती है 😢 आज कल क्योंकि तेरे बिना ये 💗 धड़कती कम और तड़पती ❤️‍🔥 ज्यादा है...!! 😒👈" , "💋 दिल से आपका ख्याल जाता नहीं 🤭 आपके सिवा कोई याद आता नहीं....!! 😒👈" , "💋 सुन मेरी जान 😘 मोहब्बत तो सभी करते है 💕 आओ हम शादी करते हैं...!! 😛👈" , "💋 डॉक्टर ने मुझे एडवाइस किया है 😏 कि रोज सोने से पहले 🥱 और और उठने के बाद 🙊 सुबह शाम आपसे बात करूं 😻 तो मेरी तबियत जल्द ही ठीक हो जाएगी.....😁😁👈" , "💋 ऊपर वाले ने जब तुम्हें बनाया होगा 🥲 उस वक़्त शायद वो 🤔 दुनिया की सबसे खूबसूरत चीज 🤭 बनाने के मूड में रहा होगा....😌😌👈" , "💋 यार आप हो सबसे हटके 🙃 तभी तो मेरा दिल 💗 आपको देख के मारता है झटके....🙈🙈👈" , "💋 भगवान का दिया हुआ सब कुछ है 😒 दौलत है 😀 शोहरत है 🙂 बस एक चीज की कमी है 🥺 वो हो तुम 🤭 लगता है अब वो भी पूरी हो जाएगी...😍👈"];
      var rand = tl[Math.floor(Math.random() * tl.length)]
  
   if ((event.body.toLowerCase() == "kamina") || (event.body.toLowerCase() == "Kamina")) {
       return api.sendMessage("तू कमीना और तेरी गर्लफ्रेंड कामिनी और तेरे आपने वाले बच्चें कमीने", threadID);
     };
   if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀") || (event.body.toLowerCase() == "😀😀😀") || (event.body.toLowerCase() == "😀😀😀😀")) {
     return api.sendMessage("इतनी हसीं क्यों आ रही है बाबु", threadID);
   };
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃") || (event.body.toLowerCase() == "😃😃😃") || (event.body.toLowerCase() == "😃😃😃😃")) {
     return api.sendMessage("बाबु एसे कौन हस्ता है आँखों को फाड़ कर", threadID);
   };
       if ((event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😄😄") || (event.body.toLowerCase() == "😄😄😄") || (event.body.toLowerCase() == "😄😄😄😄")) {
     return api.sendMessage("बाबु ये केसा हसना है आँखे बंद कर के हस रहे हो", threadID);
   };
       if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁😁😁") || (event.body.toLowerCase() == "😁😁😁😁")) {
     return api.sendMessage("लगता है आज पहेली बार ब्रश किया है बाबु ने", threadID);
   };
        if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆") || (event.body.toLowerCase() == "😆😆😆") || (event.body.toLowerCase() == "😆😆😆😆")) {
     return api.sendMessage("बाबु अच्छे नहीं लग रहे हो हस्ते भी", threadID);
   };
         if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅") || (event.body.toLowerCase() == "😅😅😅") || (event.body.toLowerCase() == "😅😅😅😅")) {
     return api.sendMessage("बाबु आपके सर से पानी आ रहा है", threadID);
   };
        if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣🤣")) {
     return api.sendMessage("बाबु इतनी हसीं क्यों आती है आपको", threadID);
   };
       if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂")) {
     return api.sendMessage("बेबी इतनी हसीं क्यों आ रही है, क्या राज है इस हसीं का हमें भी बताओ", threadID);
   };
        if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲🥲")) {
     return api.sendMessage("बाबु आपकी आँख मेसे पानी निकल रहा है, या नाक मेसे", threadID);
   };
        if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂🙂")) {
     return api.sendMessage("बाबु आज कैसे चुप बैठे हो", threadID);
   };
        if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃🙃")) {
     return api.sendMessage("आले मेरा बाबु उल्टा हो गया", threadID);
   };
       if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉") || (event.body.toLowerCase() == "😉😉😉") || (event.body.toLowerCase() == "😉😉😉😉")) {
     return api.sendMessage("बाबु आँख क्यों मर रहे हो मे नहीं पटूंगी", threadID);
   };
           if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊") || (event.body.toLowerCase() == "😊😊😊") || (event.body.toLowerCase() == "😊😊😊😊")) {
     return api.sendMessage("बाबु आज तो आपकी सिकल लाल लाल हो रही है", threadID);
   };
          if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇") || (event.body.toLowerCase() == "😇😇😇") || (event.body.toLowerCase() == "😇😇😇😇")) {
     return api.sendMessage("😇😇😇😇", threadID);
   };
            if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("बाबु मुझे लग रहा है आपको प्यार हो गया मेरसे", threadID);
   };
       if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍") || (event.body.toLowerCase() == "😍😍😍😍")) {
     return api.sendMessage("इतना प्यार करते हो बाबु", threadID);
   };
       if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩🤩")) {
     return api.sendMessage("बाबु आपकी आँखों मे स्तर दिख रहे है", threadID);
   };
      if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗") || (event.body.toLowerCase() == "😗😗😗") || (event.body.toLowerCase() == "😗😗😗😗")) {
     return api.sendMessage("😗😗😗", threadID);
   };
      if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️☺️")) {
     return api.sendMessage("बाबु आपकी आँखों को क्या हुआ दिख नहीं रही है", threadID);
   };
       if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚") || (event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
      if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋😋😋😋")) {
     return api.sendMessage("बाबु इतनी पसंद है आपको जो आपकी जीब बाहर आ गयी", threadID);
   };
        if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛") || (event.body.toLowerCase() == "😛😛😛") || (event.body.toLowerCase() == "😛😛😛😛")) {
     return api.sendMessage("जीब क्यों दिखा रहा है बाबु", threadID);
   };
        if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜") || (event.body.toLowerCase() == "😜😜😜") || (event.body.toLowerCase() == "😜😜😜😜")) {
     return api.sendMessage("आँख बंद कर के कौन जीब निकलता है पागल", threadID);
   };
       if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪🤪")) {
     return api.sendMessage("पहले अपना मुँह सीधा करो जब जीब निकलना", threadID);
   };
          if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝") || (event.body.toLowerCase() == "😝😝😝") || (event.body.toLowerCase() == "😝😝😝😝")) {
     return api.sendMessage("ठरकी इंसान जीब अन्दर करो", threadID);
   };
        if ((event.body.toLowerCase() == "🤑") || (event.body.toLowerCase() == "🤑🤑") || (event.body.toLowerCase() == "🤑🤑🤑") || (event.body.toLowerCase() == "🤑🤑🤑🤑")) {
     return api.sendMessage("🤑🤑🤑", threadID);
   };
       if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗🤗")) {
     return api.sendMessage("हाय कितना क्यूट लग रहे हो बाबु", threadID);
   };
        if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭🤭")) {
     return api.sendMessage("शर्मा क्यों रहे हो बाबु", threadID);
   };
        if ((event.body.toLowerCase() == "🫠") || (event.body.toLowerCase() == "🫠🫠") || (event.body.toLowerCase() == "🫠🫠🫠") || (event.body.toLowerCase() == "🫠🫠🫠🫠")) {
     return api.sendMessage("🫠🫠🫠", threadID);
   };
         if ((event.body.toLowerCase() == "🫢") || (event.body.toLowerCase() == "🫢🫢") || (event.body.toLowerCase() == "🫢🫢🫢") || (event.body.toLowerCase() == "🫢🫢🫢🫢")) {
     return api.sendMessage("क्या हुआ बाबु मुँह पर हाथ क्यों लगा रखे हो", threadID);
   };
          if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🫣🫣") || (event.body.toLowerCase() == "🫣🫣🫣") || (event.body.toLowerCase() == "🫣🫣🫣🫣")) {
     return api.sendMessage("ऐसे क्या देख रहे हो बाबु एक आँख से", threadID);
   };
            if ((event.body.toLowerCase() == "🫡") || (event.body.toLowerCase() == "🫡🫡") || (event.body.toLowerCase() == "🫡🫡🫡") || (event.body.toLowerCase() == "🫡🫡🫡🫡")) {
     return api.sendMessage("🫡🫡🫡", threadID);
   };
           if ((event.body.toLowerCase() == "🫤") || (event.body.toLowerCase() == "🫤🫤") || (event.body.toLowerCase() == "🫤🫤🫤") || (event.body.toLowerCase() == "🫤🫤🫤🫤")) {
     return api.sendMessage("टेड़ा मुँह क्यों बना के बैठो हो बाबु", threadID);
   };
         if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹🥹")) {
     return api.sendMessage("क्या हुआ बाबु आँखों से पानी क्यों आ रहा है", threadID);
   };
         if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫🤫")) {
     return api.sendMessage("तू चुप ठरकी इंसान मे क्यों चुप रहे हु", threadID);
   };
         if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔🤔")) {
     return api.sendMessage("बाबु आपके पास दिमाक है जो इतना सोच रहे हो", threadID);
   };
          if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐") || (event.body.toLowerCase() == "🤐🤐🤐") || (event.body.toLowerCase() == "🤐🤐🤐🤐")) {
     return api.sendMessage("बाबु ये क्या हुआ आपके मुँह को", threadID);
   };
        if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨🤨")) {
     return api.sendMessage("ऐसे क्या देख रहे हो ठरकी इंसान", threadID);
   };
     if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("अब बोल बाबु चुप क्यों हो", threadID);
   };
        if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶😶😶") || (event.body.toLowerCase() == "😶😶😶😶")) {
     return api.sendMessage("बाबु आपके लिप्स कहा गए", threadID);
   };
       if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏") || (event.body.toLowerCase() == "😏😏😏") || (event.body.toLowerCase() == "😏😏😏😏")) {
     return api.sendMessage("एटीट्यूड कैसे दिखा रहा है ठरकी इंसान", threadID);
   };
        if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒") || (event.body.toLowerCase() == "😒😒😒😒")) {
     return api.sendMessage("अपना एटीट्यूड अपने पास रखो ठरकी इंसान", threadID);
   };
          if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄🙄")) {
     return api.sendMessage("ऊपर क्या देख रहे हो बाबू मैं तो अभी नीचे ही हूं", threadID);
   };
       if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬") || (event.body.toLowerCase() == "😬😬😬") || (event.body.toLowerCase() == "😬😬😬😬")) {
     return api.sendMessage("बाबू आपके दांत अच्छे नहीं है मुँह बंद करो", threadID);
   };
        if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥🤥")) {
     return api.sendMessage("बाबू आपकी नाक किसने खिंचा दी जो इतनी लंबी हो गई", threadID);
   };
        if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌") || (event.body.toLowerCase() == "😌😌😌") || (event.body.toLowerCase() == "😌😌😌😌")) {
     return api.sendMessage("क्या हुआ बाबू आंखें नीचे कर रखी है आपने", threadID);
   };
        if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔") || (event.body.toLowerCase() == "😔😔😔") || (event.body.toLowerCase() == "😔😔😔😔")) {
     return api.sendMessage(" बाबू आप सेड़ मत हो मुझे अच्छा नहीं लगता कुछ भी मैं हूं ना आपके साथ", threadID);
   };
        if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪") || (event.body.toLowerCase() == "😪😪😪") || (event.body.toLowerCase() == "😪😪😪😪")) {
     return api.sendMessage("बाबू आपकी नाक में गुब्बारा फूल गया", threadID);
   };
        if ((event.body.toLowerCase() == "😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨😮‍💨😮‍💨")) {
     return api.sendMessage("कहां से भाग के आ रहे हो बाबू जो इतना थक गई", threadID);
   };
      if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤") || (event.body.toLowerCase() == "🤤🤤🤤") || (event.body.toLowerCase() == "🤤🤤🤤🤤")) {
     return api.sendMessage("गंदा इंसान मुंह से भी पानी निकल रहा है आपके", threadID);
   };
        if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("कोई इसमें लात मारो यह ग्रुप में सो गया", threadID);
   };
         if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "😷😷") || (event.body.toLowerCase() == "😷😷😷") || (event.body.toLowerCase() == "😷😷😷😷")) {
     return api.sendMessage("मेरा बाबु डॉक्टर बन गया", threadID);
   };
         if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒🤒")) {
     return api.sendMessage("क्या हुआ बाबु, मेरे पास आओ मे आपको दवा देती हु", threadID);
   };
         if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤕🤕") || (event.body.toLowerCase() == "🤕🤕🤕") || (event.body.toLowerCase() == "🤕🤕🤕🤕")) {
     return api.sendMessage("बाबु चोट कैसे लग गयी आपको", threadID);
   };
       if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤢🤢") || (event.body.toLowerCase() == "🤢🤢🤢") || (event.body.toLowerCase() == "🤢🤢🤢🤢")) {
     return api.sendMessage("उल्टा सीधा कहा लिया होगा पागल ने", threadID);
   };
         if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮🤮")) {
     return api.sendMessage("बाबु कोनसा मंथ चल रहा है", threadID);
   };
         if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧🤧")) {
     return api.sendMessage("ग्रुप से बाहर जाओ ग्रुप को गन्दा कर रहे हो", threadID);
   };
        if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("हाय गर्मी बाबु", threadID);
   };
         if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "🥶🥶") || (event.body.toLowerCase() == "🥶🥶🥶") || (event.body.toLowerCase() == "🥶🥶🥶🥶")) {
     return api.sendMessage("बाबु आज ठंडी बहुत है", threadID);
   };
         if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴🥴")) {
     return api.sendMessage("बाबु आज कितनी पीके आये हो", threadID);
   };
        if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵") || (event.body.toLowerCase() == "😵‍💫") || (event.body.toLowerCase() == "😵‍💫😵‍💫")) {
     return api.sendMessage("😵‍💫😵‍💫😵‍💫", threadID);
   };
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯")) {
     return api.sendMessage("बाबु आपके सर पर किसने बोम फोड़ दिया", threadID);
   };
         if ((event.body.toLowerCase() == "🤠") || (event.body.toLowerCase() == "🤠🤠") || (event.body.toLowerCase() == "🤠🤠🤠") || (event.body.toLowerCase() == "🤠🤠🤠🤠")) {
     return api.sendMessage("जंतर मन बन गए आप तो", threadID);
   };
         if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳🥳")) {
     return api.sendMessage("बेबी किसकी पार्टी मे जा रहे हो, मुझे भी ले चलो", threadID);
   };
         if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎") || (event.body.toLowerCase() == "😎😎😎") || (event.body.toLowerCase() == "😎😎😎😎")) {
     return api.sendMessage("बाबु आप चश्मे मे एक दम बेकार लग रहे हो", threadID);
   };
         if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🥸🥸") || (event.body.toLowerCase() == "🤓") || (event.body.toLowerCase() == "🤓🤓")) {
     return api.sendMessage("तू से अच्छा तो मे ही दिखती हु", threadID);
   };
         if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐") || (event.body.toLowerCase() == "🧐🧐🧐") || (event.body.toLowerCase() == "🧐🧐🧐🧐")) {
     return api.sendMessage("ऐसे क्या देख रहे हो बाबु एक आँख मे चस्मा लगा कर", threadID);
   };
         if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😟😟")) {
     return api.sendMessage("😕😟😕", threadID);
   };
         if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "☹️☹️")) {
     return api.sendMessage("🙁☹️🙁", threadID);
   };
        if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮") || (event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😲")) {
     return api.sendMessage("बाबु मुँह बंद करो नहीं तो माखी घुस जाएगी", threadID);
   };
        if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱🥱") || (event.body.toLowerCase() == "🥱🥱🥱") || (event.body.toLowerCase() == "🥱🥱🥱🥱")) {
     return api.sendMessage("घर जा कर सो जा यहाँ मना है सोना", threadID);
   };
        if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳") || (event.body.toLowerCase() == "😳😳😳") || (event.body.toLowerCase() == "😳😳😳😳")) {
     return api.sendMessage("कभी देखि नहीं लड़की जो आप आँझ फाड़ फाड़ के देख रहे हो", threadID);
   };
        if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥺🥺🥺") || (event.body.toLowerCase() == "🥺🥺🥺🥺")) {
     return api.sendMessage("क्या हुआ मेरे बच्चें को", threadID);
   };
        if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😦😧😦", threadID);
   };
        if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("😨😰😨", threadID);
   };
        if ((event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😥😥") || (event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("क्या हुआ बाबु मे हु ना आपके साथ", threadID);
   };
        if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭") || (event.body.toLowerCase() == "😭😭😭") || (event.body.toLowerCase() == "😭😭😭😭")) {
     return api.sendMessage("बाबु रो क्यों रहे हो मुझे बताओ किसी ने कुछ बोला आपको", threadID);
   };
       if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱") || (event.body.toLowerCase() == "😱😱😱") || (event.body.toLowerCase() == "😱😱😱😱")) {
     return api.sendMessage("क्या हुआ गुड्डू क्या दिख गया", threadID);
   };
        if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😖😣😖", threadID);
   };
        if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("😞😓😞", threadID);
   };
        if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😩😩") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😫😫")) {
     return api.sendMessage("😩😫😩", threadID);
   };
        if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("इतना गुस्सा", threadID);
   };
        if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡") || (event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡😡😡")) {
     return api.sendMessage("बाबु गुस्सा मत करो लो एक किस्सी और संत हो जाओ", threadID);
   };
        if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬") || (event.body.toLowerCase() == "🤬🤬🤬🤬")) {
     return api.sendMessage("मुझे भी गुस्सा आता है मुझे मत दिखाओ गुस्सा 🤬🤬🤬", threadID);
   };
      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "😈😈") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "👿👿")) {
     return api.sendMessage("😈👿😈", threadID);
   };
      if ((event.body.toLowerCase() == "💀") || (event.body.toLowerCase() == "💀💀") || (event.body.toLowerCase() == "☠️") || (event.body.toLowerCase() == "☠️☠️")) {
     return api.sendMessage("💀☠️💀", threadID);
   };
      if ((event.body.toLowerCase() == "💩") || (event.body.toLowerCase() == "💩💩") || (event.body.toLowerCase() == "💩💩💩") || (event.body.toLowerCase() == "💩💩💩💩")) {
     return api.sendMessage("💩💩💩", threadID);
   };
      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡") || (event.body.toLowerCase() == "🤡🤡🤡") || (event.body.toLowerCase() == "🤡🤡🤡🤡")) {
     return api.sendMessage("🤡🤡🤡", threadID);
   };
        if ((event.body.toLowerCase() == "👹") || (event.body.toLowerCase() == "👹👹") || (event.body.toLowerCase() == "👺") || (event.body.toLowerCase() == "👺👺")) {
     return api.sendMessage("👹👺👹", threadID);
   };
        if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻") || (event.body.toLowerCase() == "👻👻👻") || (event.body.toLowerCase() == "👻👻👻👻")) {
     return api.sendMessage("👻👻👻👻", threadID);
   };
      if ((event.body.toLowerCase() == "👽") || (event.body.toLowerCase() == "👽👽") || (event.body.toLowerCase() == "👾") || (event.body.toLowerCase() == "👾👾")) {
     return api.sendMessage("👽👾👽", threadID);
   };
      if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖🤖") || (event.body.toLowerCase() == "🤖🤖🤖") || (event.body.toLowerCase() == "🤖🤖🤖🤖")) {
     return api.sendMessage("चिड़ा क्यों रहा है ठरकी", threadID);
   };
      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😺😺") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😸😸")) {
     return api.sendMessage("😺😸😺", threadID);
   };
    if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹") || (event.body.toLowerCase() == "😹😹😹") || (event.body.toLowerCase() == "😹😹😹😹")) {
     return api.sendMessage("बिल्ली के तारे क्यों हस रहे हो", threadID);
   };
      if ((event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "😻😻") || (event.body.toLowerCase() == "😽") || (event.body.toLowerCase() == "😽😽")) {
     return api.sendMessage("😽😻😽", threadID);
   };
        if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼") || (event.body.toLowerCase() == "🙀") || (event.body.toLowerCase() == "🙀🙀")) {
     return api.sendMessage("😼🙀😼", threadID);
   };
      if ((event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😿😿") || (event.body.toLowerCase() == "😾") || (event.body.toLowerCase() == "😾😾")) {
     return api.sendMessage("😾😿😾", threadID);
   };
      if ((event.body.toLowerCase() == "👋") || (event.body.toLowerCase() == "🤚") || (event.body.toLowerCase() == "🖐️") || (event.body.toLowerCase() == "✋")) {
     return api.sendMessage("👋👋", threadID);
   };
     if ((event.body.toLowerCase() == "👌") || (event.body.toLowerCase() == "👌👌") || (event.body.toLowerCase() == "👌👌👌") || (event.body.toLowerCase() == "👌👌👌👌")) {
     return api.sendMessage("अच्छा जी", threadID);
   };
      if ((event.body.toLowerCase() == "✌️") || (event.body.toLowerCase() == "🤞") || (event.body.toLowerCase() == "🤟") || (event.body.toLowerCase() == "🤘")) {
     return api.sendMessage("✌️✌️", threadID);
   };
      if ((event.body.toLowerCase() == "🖕") || (event.body.toLowerCase() == "🖕🖕") || (event.body.toLowerCase() == "🖕🖕🖕") || (event.body.toLowerCase() == "🖕🖕🖕🖕")) {
     return api.sendMessage("🖕🖕🖕", threadID);
   };
        if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍👍") || (event.body.toLowerCase() == "👍👍👍") || (event.body.toLowerCase() == "👍👍👍👍")) {
     return api.sendMessage("अंगूठा किसको दिखा रहा है ठरकी", threadID);
   };
        if ((event.body.toLowerCase() == "👊") || (event.body.toLowerCase() == "✊") || (event.body.toLowerCase() == "🤛") || (event.body.toLowerCase() == "🤜")) {
     return api.sendMessage("👊👊", threadID);
   };
      if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🙏🙏") || (event.body.toLowerCase() == "🙏🙏🙏") || (event.body.toLowerCase() == "🙏🙏🙏🙏")) {
     return api.sendMessage("हाथ क्यों जोड़ रहे हो बाबु", threadID);
   };
      if ((event.body.toLowerCase() == "💪") || (event.body.toLowerCase() == "💪💪") || (event.body.toLowerCase() == "💪💪💪") || (event.body.toLowerCase() == "💪💪💪💪")) {
     return api.sendMessage("💪💪💪", threadID);
   };
      if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "👀👀") || (event.body.toLowerCase() == "👁️") || (event.body.toLowerCase() == "👁️👁️")) {
     return api.sendMessage("👀👀👀", threadID);
   };
         if ((event.body.toLowerCase() == "👅") || (event.body.toLowerCase() == "👅👅") || (event.body.toLowerCase() == "👅👅👅") || (event.body.toLowerCase() == "👅👅👅👅")) {
     return api.sendMessage("👅👅👅", threadID);
   };
         if ((event.body.toLowerCase() == "👄") || (event.body.toLowerCase() == "👄👄") || (event.body.toLowerCase() == "🫦") || (event.body.toLowerCase() == "🫦🫦")) {
     return api.sendMessage("👄🫦👄", threadID);
   };
         if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️") || (event.body.toLowerCase() == "❤️❤️❤️❤️")) {
     return api.sendMessage("मुझे काला दिल चाहिए लाल तो टूट जाता है", threadID);
   };
         if ((event.body.toLowerCase() == "🩷") || (event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🩷🧡💛💚", threadID);
   };
         if ((event.body.toLowerCase() == "💙") || (event.body.toLowerCase() == "🩵") || (event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "🖤")) {
     return api.sendMessage("💙🩵💜🖤", threadID);
   };
         if ((event.body.toLowerCase() == "🩶") || (event.body.toLowerCase() == "🤎") || (event.body.toLowerCase() == "🤍") || (event.body.toLowerCase() == "🤍🤍")) {
     return api.sendMessage("🤎🤍🩶", threadID);
   };
         if ((event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "💞💞") || (event.body.toLowerCase() == "💕") || (event.body.toLowerCase() == "💕💕")) {
     return api.sendMessage("💞💕💞", threadID);
   };
         if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔") || (event.body.toLowerCase() == "💔💔💔") || (event.body.toLowerCase() == "💔💔💔💔")) {
     return api.sendMessage("आपका दिल किसने तोड़ दिया, तभी बोलती हु किसी से दिल मत लगाओ", threadID);
   };
         if ((event.body.toLowerCase() == "💗") || (event.body.toLowerCase() == "💗💗") || (event.body.toLowerCase() == "💖") || (event.body.toLowerCase() == "💖💖")) {
     return api.sendMessage("💗💖💗", threadID);
   };
        if ((event.body.toLowerCase() == "❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🩹❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🩹❤️‍🩹❤️‍🩹") || (event.body.toLowerCase() == "❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹")) {
     return api.sendMessage("❤️‍🩹❤️‍🩹❤️‍🩹", threadID);
   };
        if ((event.body.toLowerCase() == "🙋") || (event.body.toLowerCase() == "🙋‍♂️") || (event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋‍♂️🙋‍♂️")) {
     return api.sendMessage("बाबु आप आ गए", threadID);
   };
    if ((event.body.toLowerCase() == "🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️🙋‍♀️🙋‍♀️")) {
     return api.sendMessage("मेरी जानू आ गयी", threadID);
   };
      if ((event.body.toLowerCase() == "🤦") || (event.body.toLowerCase() == "🤦🤦") || (event.body.toLowerCase() == "🤦‍♂️") || (event.body.toLowerCase() == "🤦‍♂️🤦‍♂️")) {
     return api.sendMessage("🤦🤦‍♂️🤦", threadID);
   };
      if ((event.body.toLowerCase() == "🤦‍♀️") || (event.body.toLowerCase() == "🤦‍♀️🤦‍♀️") || (event.body.toLowerCase() == "🤦‍♀️🤦‍♀️🤦‍♀️") || (event.body.toLowerCase() == "🤦‍♀️🤦‍♀️🤦‍♀️🤦‍♀️")) {
     return api.sendMessage("🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️", threadID);
   };
      if ((event.body.toLowerCase() == "👸") || (event.body.toLowerCase() == "👸👸") || (event.body.toLowerCase() == "🫅") || (event.body.toLowerCase() == "🫅🫅")) {
     return api.sendMessage("🫅👸🫅", threadID);
   };
      if ((event.body.toLowerCase() == "🤰") || (event.body.toLowerCase() == "🤰🤰") || (event.body.toLowerCase() == "🫃") || (event.body.toLowerCase() == "🫃🫃")) {
     return api.sendMessage("कोनसा मंथ चल रहा है बेबी", threadID);
   };
     if ((event.body.toLowerCase() == "🤱") || (event.body.toLowerCase() == "🤱🤱") || (event.body.toLowerCase() == "🤱🤱🤱") || (event.body.toLowerCase() == "🤱🤱🤱🤱")) {
     return api.sendMessage("🤱🤱", threadID);
   };
      if ((event.body.toLowerCase() == "💃") || (event.body.toLowerCase() == "💃💃") || (event.body.toLowerCase() == "🕺") || (event.body.toLowerCase() == "🕺🕺")) {
     return api.sendMessage("💃🕺💃", threadID);
   };
        if ((event.body.toLowerCase() == "💐") || (event.body.toLowerCase() == "🌸") || (event.body.toLowerCase() == "💮") || (event.body.toLowerCase() == "🏵️")) {
     return api.sendMessage("💐🌸💮🏵️", threadID);
   };
        if ((event.body.toLowerCase() == "🌹") || (event.body.toLowerCase() == "🌹🌹") || (event.body.toLowerCase() == "🥀") || (event.body.toLowerCase() == "🥀🥀")) {
     return api.sendMessage("हाय मेरी बेबी ने मुझे रोज दिया", threadID);
   };
  if ((event.body.toLowerCase() == "🐒")) {return api.sendMessage("बेबी मुझे पता है आप बंदर हो", threadID);
     };
  if ((event.body.toLowerCase() == "🙉🙉")) {return api.sendMessage("बुरा मत सुनो", threadID);
     };
  if ((event.body.toLowerCase() == "🙊")) {return api.sendMessage("बुरा मत बोलो", threadID);
     };
  if ((event.body.toLowerCase() == "🙉")) {return api.sendMessage("बुरा मत सुनो", threadID);
     };
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈") || (event.body.toLowerCase() == "🙈🙈🙈🙈")) {
     return api.sendMessage("प्यारी शर्मा गयी", threadID);
   };
        if ((event.body.toLowerCase() == "🌺") || (event.body.toLowerCase() == "🌻") || (event.body.toLowerCase() == "🌼") || (event.body.toLowerCase() == "🌷")) {
     return api.sendMessage("🌺🌻🌼🌷", threadID);
   };
      if ((event.body.toLowerCase() == "🪻") || (event.body.toLowerCase() == "🌱") || (event.body.toLowerCase() == "🌲") || (event.body.toLowerCase() == "🌳")) {
     return api.sendMessage("🪻🌱🌲🌳", threadID);
   };
      if ((event.body.toLowerCase() == "🌴") || (event.body.toLowerCase() == "🌵") || (event.body.toLowerCase() == "🌾") || (event.body.toLowerCase() == "🌿")) {
     return api.sendMessage("🌴🌵🌾🌿", threadID);
   };
         if ((event.body.toLowerCase() == "☘️") || (event.body.toLowerCase() == "🍀") || (event.body.toLowerCase() == "🍁") || (event.body.toLowerCase() == "🍂")) {
     return api.sendMessage("☘️🍀🍁🍂", threadID);
   };
        if ((event.body.toLowerCase() == "🍌") || (event.body.toLowerCase() == "🍌🍌") || (event.body.toLowerCase() == "🍌🍌🍌") || (event.body.toLowerCase() == "🍌🍌🍌🍌")) {
     return api.sendMessage("🍌🍌🍌", threadID);
   };
        if ((event.body.toLowerCase() == "🎂") || (event.body.toLowerCase() == "🥪") || (event.body.toLowerCase() == "🍟") || (event.body.toLowerCase() == "🧀")) {
     return api.sendMessage("🎂🎂🎂", threadID);
   };
         if ((event.body.toLowerCase() == "🍼") || (event.body.toLowerCase() == "🍼🍼") || (event.body.toLowerCase() == "🍼🍼🍼") || (event.body.toLowerCase() == "🍼🍼🍼🍼")) {
     return api.sendMessage("🍼🍼🍼", threadID);
   };
        if ((event.body.toLowerCase() == "🍾") || (event.body.toLowerCase() == "🍾🍾") || (event.body.toLowerCase() == "🍷") || (event.body.toLowerCase() == "🍷🍷")) {
     return api.sendMessage("🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️🤦🏻‍♀️", threadID);
   };
        if ((event.body.toLowerCase() == "💯") || (event.body.toLowerCase() == "💯💯") || (event.body.toLowerCase() == "❤️‍🔥") || (event.body.toLowerCase() == "❤️‍🔥❤️‍🔥")) {
     return api.sendMessage("💯❤️‍🔥💯", threadID);
   };
         if ((event.body.toLowerCase() == "🎈") || (event.body.toLowerCase() == "🎉") || (event.body.toLowerCase() == "🎊") || (event.body.toLowerCase() == "🎋")) {
     return api.sendMessage("🎉🎋🎉", threadID);
   };
         if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "♠️") || (event.body.toLowerCase() == "♦️") || (event.body.toLowerCase() == "♣️")) {
     return api.sendMessage("♠️♥️♦️♣️", threadID);
   };
         if ((event.body.toLowerCase() == "🌅") || (event.body.toLowerCase() == "🌅🌅") || (event.body.toLowerCase() == "🌄") || (event.body.toLowerCase() == "🌄🌄")) {
     return api.sendMessage("🌄🌅🌄", threadID);
   };
         if ((event.body.toLowerCase() == "🌟") || (event.body.toLowerCase() == "✨") || (event.body.toLowerCase() == "💫") || (event.body.toLowerCase() == "⭐")) {
     return api.sendMessage("🌟🌟🌟", threadID);
   };
         if ((event.body.toLowerCase() == "💥") || (event.body.toLowerCase() == "🧨") || (event.body.toLowerCase() == "🎇") || (event.body.toLowerCase() == "🎆")) {
     return api.sendMessage("💥🧨💥", threadID);
   };
         if ((event.body.toLowerCase() == "🕉️") || (event.body.toLowerCase() == "🕉️🕉️") || (event.body.toLowerCase() == "🕉️🕉️🕉️") || (event.body.toLowerCase() == "🕉️🕉️🕉️🕉️")) {
     return api.sendMessage("🕉️", threadID);
   };
        if ((event.body.toLowerCase() == "🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳🇮🇳") || (event.body.toLowerCase() == "🇮🇳🇮🇳🇮🇳🇮🇳")) {
     return api.sendMessage("🇮🇳🇮🇳", threadID);
   };
    if ((event.body.toLowerCase() == "Guddu") || (event.body.toLowerCase() == "Laddu") || (event.body.toLowerCase() == "Kabutri") || (event.body.toLowerCase() == "Pagal")) {
     return api.sendMessage("हा बाबु बोलो कैसे याद किया आपने, threadID);
   };
         if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "beby") || (event.body.toLowerCase() == "Beby")) {
     return api.sendMessage("ठरकी इंसान आपने जानू बेबी के पास जाओ", threadID);
   };
    if ((event.body.toLowerCase() == "malik") || (event.body.toLowerCase() == "Malik") || (event.body.toLowerCase() == "MALIK") || (event.body.toLowerCase() == "MALIK")) {
     return api.sendMessage("मे सिर्फ कृष्णा की हु", threadID);
   };
      if ((event.body.toLowerCase() == "shyam diwani") || (event.body.toLowerCase() == "Shyam diwani") || (event.body.toLowerCase() == "Shyam Diwani") || (event.body.toLowerCase() == "SHYAM DIWANI")) {
     return api.sendMessage("हाजी कृष्णा जी कैसे याद आ गयी आज आपको", threadID);
   };
        if ((event.body.toLowerCase() == "achha ji") || (event.body.toLowerCase() == "Achha ji") || (event.body.toLowerCase() == "achh") || (event.body.toLowerCase() == "Achha")) {
     return api.sendMessage("हा बाबु", threadID);
   };
    if ((event.body.toLowerCase() == "bot tera owner kon hai") || (event.body.toLowerCase() == "Bot tera admin kon hai") || (event.body.toLowerCase() == "Kisne banaya he") || (event.body.toLowerCase() == "Bot kiska he")) {
     return api.sendMessage("मे आपने कृष्णा जी की हु और उसे से पूछो मुझे मत परेशान करो", threadID);
   };
         if ((event.body.toLowerCase() == "koi he") || (event.body.toLowerCase() == "Koi he") || (event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "Koi hai")) {
     return api.sendMessage("हा जी बाबु बोलो क्या काम है", threadID);
   };
    if ((event.body.toLowerCase() == "ib") || (event.body.toLowerCase() == "Ib") || (event.body.toLowerCase() == "IB") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("IB मे क्या रखा है जो IB जाते हो", threadID);
   };
    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "CHUP") || (event.body.toLowerCase() == "Chup kar")) {
     return api.sendMessage("मे तो बोलूंगी तुम कौन होते हो मुझे चुप करनिया ठरकी इंसान", threadID);
   };
    if ((event.body.toLowerCase() == "tera boss hu") || (event.body.toLowerCase() == "Tera boss hu") || (event.body.toLowerCase() == "TERA BOSS HU") || (event.body.toLowerCase() == "TERA PAPA HU")) {
     return api.sendMessage("सॉरी पापा जी मुझे नहीं पता लगा माफ कर दो पापा जी अब नहीं होगा छोटे बच्चें को माफ कर दो प्लीज़ 🥹🥹", threadID);
   };
      if ((event.body.toLowerCase() == "kya kar rehe ho") || (event.body.toLowerCase() == "kkrh") || (event.body.toLowerCase() == "Kya kar rehe ho") || (event.body.toLowerCase() == "Ky kar rehe ho")) {
     return api.sendMessage("आपका वेट", threadID);
   };
         if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "Kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "Kaise ho")) {
     return api.sendMessage("मे अच्छी हु आप कैसे हो", threadID);
   };
    if ((event.body.toLowerCase() == "bolo") || (event.body.toLowerCase() == "Bolo") || (event.body.toLowerCase() == "bol") || (event.body.toLowerCase() == "Bol")) {
     return api.sendMessage("हाजी बाबु", threadID);
   };
        if ((event.body.toLowerCase() == "kaha") || (event.body.toLowerCase() == "Kaha") || (event.body.toLowerCase() == "KAHA") || (event.body.toLowerCase() == "KAHA")) {
     return api.sendMessage("यही हु बाबु", threadID);
   };
     mess = "{name}"


   if (event.body.includes("Bot") == 1 ||
     (event.body.includes("bot") == 1 ||
     (event.body.includes("BOT") == 1 ||
     (event.body.includes("BABU") == 1 ||
     (event.body.includes("Babu") == 1 ||
     (event.body.includes("babu") == 1 ||
     (event.body.includes("boot") == 1 ||
     (event.body.includes("Oye") == 1 ||
     (event.body.includes("oye") == 1 ))))))))) {
      var msg = {
        body: `${rand}`
      }
  var msg = {
    body: `🩵💥🍒[ ${name} ]🩵🍒🌸

🍒🩵 [  ${rand}  ] 🌸🥀🍒                                        


                      *★᭄𝗢𝘄𝗻𝗲𝗿 ཫ.                  ༄𒁍≛⃝𝐌𝐑.𝐒𝐇𝐘𝐀𝐌 𝐃𝐈𝐖𝐀𝐍𝐈💫🍒💐🩵`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
