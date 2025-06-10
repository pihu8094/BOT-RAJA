module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    description: "",
    commandCategory: "Admin",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join("...😞🫤..𝚈𝚎 𝙶𝚛𝚘𝚞𝚙 𝙲𝚑𝚘𝚛𝚗𝚎 𝙺𝚊 𝙷𝚞𝚔𝚞𝚖 𝙳𝚒𝚢𝚊 𝙷𝚎 𝙺𝚛𝚒𝚜𝚑𝚗𝚊 𝙱𝚊𝚋𝚞...🩵✨...𝙺𝚎 𝚃𝚊𝚛𝚊𝚏 𝚂𝚎 𝙱𝚊𝚢 𝙱𝚊𝚢 𝙶𝚞𝚢𝚜 𝙳𝚞𝚟𝚊𝚛𝚎 𝙽𝚑𝚒 𝙰𝚊𝚞𝚗𝚐𝚊..😭💔..."));
}
