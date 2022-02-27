let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Dana:* [6281252733108]
┣➥ *Gopay:* [6281252733108]
┣➥ *Ovo:* [6281252733108]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281252733108*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
