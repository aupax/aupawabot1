let handler = async m => m.reply(`
╭─「 Donasi 😁 」
│ • Pulsa Telkomsel [wa.me/6285236804124]
│ • Gopay [wa.me/6285236804124]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
