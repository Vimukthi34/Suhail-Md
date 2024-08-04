const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_19_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICAzLFxuICAgICAgICAxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NCxcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOGpFUXF2QnRldVlUTFo1OWJGb2tzMVEvdk00Z1NpN3FsOWpBc2tQeVNkND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NTIwNTAxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTc2NDA5QkMyODA2MTJDQTIwNTA3NjQ1RkYwOTI4NDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNzUyMzQzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdMQm82UnNnUkdDWWc2WFFfOWFrSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODk2NWNjNWQtZTY1Zi00ZWZiLWIxZGYtZmI0M2ZmOGRhYjQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIxNyxcbiAgICAgIDEyMCxcbiAgICAgIDkwLFxuICAgICAgMTUzLFxuICAgICAgMzUsXG4gICAgICAxMTcsXG4gICAgICAyMzUsXG4gICAgICAxMjYsXG4gICAgICA1NCxcbiAgICAgIDgzLFxuICAgICAgODMsXG4gICAgICAyMzYsXG4gICAgICAyMzcsXG4gICAgICAyNSxcbiAgICAgIDE1MyxcbiAgICAgIDMsXG4gICAgICA2LFxuICAgICAgMTYyLFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxNTgsXG4gICAgICAyNDksXG4gICAgICAxNjcsXG4gICAgICA2NCxcbiAgICAgIDM1LFxuICAgICAgMTA3LFxuICAgICAgMjM5LFxuICAgICAgMTc1LFxuICAgICAgMTk3LFxuICAgICAgNTksXG4gICAgICAxMDcsXG4gICAgICAyMzQsXG4gICAgICAxOTIsXG4gICAgICAxODYsXG4gICAgICAxNTksXG4gICAgICAxMzMsXG4gICAgICAxODEsXG4gICAgICA4NyxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRBNllIMUJHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NTIwNTAxMjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2NTE4MjYwNDY5ODU5OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BEWC9Id1F6N3E4dFFZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOUtPR2oxN1Nhd0E1di81MWkrZzhDNWpnRjNlUklLMnl0ZTB0cFdaRzB6VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWVXR6eURIVytPVndFRVo2aUkwTWtQODMrUHRlbmg3UjMxTVBrci9ZQkxBR2tpVzNoejBQZmpvdlhJUW9SK1RJd2xSK0pScFBwTUU0MzN2aVhYenpCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3U2V1eXVFcGUvaTJ4eEtwb1cxejFjSERwZEFRN1Rqcjh2RFZVTUdvMUJUaVUvaHdPemFHOGViUk1lWTBXVnkxbk1xd2lHQlhEUXVsWVJ3OTVuL0RpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NTIwNTAxMjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3NTIzMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNcmRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1yZC5qc29uIjogIntcImtleURhdGFcIjpcInlXRzdHbmxnT08yVkx4WmxjNmtzNC9lcHd1Q0lJK1dJVUozS2hkdGxDd3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYyMDg5NzEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3NTAzMTgyNjFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
