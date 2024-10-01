const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNsUlNTZDV0NzdQdW5KamlqVWNYOVVNSmREQkFrS3ZSbzVkY0FoNXdtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEZ2SUsvUkpoSWVkTkdxMHRuQkpScC9SZ28rVk1XZnlmZDAyenBNQUhFaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFT2ZaQ21XbVpMYmlSbEJUNFFZSkh1Mk5HQUFDRjdXV1BTVDY0VklqdVc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuaFNZWUlFdis2RjN0YUVvekxycUdycTJiTVRyR1lUWkJmWVFNTENwbmpvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNczBTQjJ5bG9XRlF5dlRjZHpUQmxVNUl5UmRlZEM3WFNsWU81U1prbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxmOWFTeVR3alp5ODZNZjdPQ3JXcHR0N0VDZ1ZDdzFXcGprU09GTVM3aFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJBbGRxMnovZXRwZCtWUkR5QXZPb3J4UmROV1FRNG1sQmZwRzNueWVrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWYwR3RlU2J4Q0xnQStSZkdVRG80MEY1R1phSEduQnE1VnhTbmFEQ2V4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVxSlkxVTByK2xaNnowMStMTFVLek5Md3Z2bEt2Z0Q2blkvNmlIZGF1cFVHSXRJSjJ2ZmtPQ2wzUzMxN21YSGozZUlMcmx1Q1pXd1FqLzJ5bXlUc2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NSwiYWR2U2VjcmV0S2V5IjoibGF1MGxjZ2kzS1Z1aEpPUW9Na3phcm9FcFczQzB6NEc1NkJKcFVweS9adz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidWJZa0hmaTNRSG1renUwSEViUVRvZyIsInBob25lSWQiOiJiODNhMDJjYi1lNjMwLTQ4NjAtYWE2Yy1mOWM0ZGUyOTYxNjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzU1Rm12bExUamxscUpoN0hycDJIdmIwQ29vPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyOTkxY0Z1bWJUWUhvOVRPS2VjQ1RCNk9rdUU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJS0wvdHdHRUo2WjdiY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5SW12VDluc05LRGtGM0pWUHIvV1F2NnB6ZkhnMEtsNTlQT0ZYcHk4Tkc4PSIsImFjY291bnRTaWduYXR1cmUiOiIzbjY5RmVOU2ZIMDFma0VXcytxcmNOQytQRlU5Snh2RlFqNUQ2d2Zqd01lNDI4YnlPQzhaR0NVSys2WC9LQUJIek1zRDBSNDkwTUF5NFM3Y2Q3UXJDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib2F1UnhOcWhsWnlHWHBzR1JxVzJRQVptemFXZ0pFeXBzWkZSSjJwSEkyY0ViZFBvanB0WjlNODhaR2pMZEdRaVIrTU9tMFZ5Tk9tSDUzZVVsQWllaVE9PSJ9LCJtZSI6eyJpZCI6IjE4Mjk3NTg4MjMyOjEwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkhlaW1kYWxsIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4Mjk3NTg4MjMyOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNpSnIwL1o3RFNnNUJkeVZUNi8xa0wrcWMzeDROQ3BlZlR6aFY2Y3ZEUnYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc3NDUxOTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBa0FBTHZmIn0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '18297588232' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
