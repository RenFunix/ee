/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.owner = ['6282148864989']
global.premium = ['6282148864989']
global.packname = 'ᴋᴜʀᴜᴍɪ-ᴍᴅ'
global.author = 'ʙʏ ʀᴇɴғᴜɴɪx'
global.sessionName = 'kurumi'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ sᴜᴋsᴇs',
    admin: 'ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ!',
    botAdmin: 'ʙᴏᴛ ʜᴀʀᴜs ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ!',
    owner: 'ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ʙᴏᴛ',
    group: 'ғɪᴛᴜʀ ᴅɪɢᴜɴᴀᴋᴀɴ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ɢʀᴏᴜᴘ!',
    private: 'ғɪᴛᴜʀ ᴅɪɢᴜɴᴀᴋᴀɴ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ!',
    bot: 'ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴘᴇɴɢɢᴜɴᴀ ɴᴏᴍᴏʀ ʙᴏᴛ',
    wait: 'ʟᴏᴀᴅɪɴɢ...',
    endLimit: 'ʟɪᴍɪᴛ ʜᴀʀɪᴀɴ ᴀɴᴅᴀ ᴛᴇʟᴀʜ ʜᴀʙɪs, ʟɪᴍɪᴛ ᴀᴋᴀɴ ᴅɪʀᴇsᴇᴛ sᴇᴛɪᴀᴘ ᴊᴀᴍ 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/f9e7ef479dcdace970147.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
