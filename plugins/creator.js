let handler = function (m) {
  // this.sendContact(m.chat, '6287753892956', 'Aupa (Owner AUPABOT)', m)
  this.sendContact(m.chat, '6285236804124', 'Aupa ', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
