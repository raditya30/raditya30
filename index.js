/*
]---------------- INFO SCRIPT ---------------[ 
  
  > AUTHOR : YogiPw
  > REMAKE : Aditz CH
  > DON'T DELETE THE AUTHOR'S NAME AND MY NAME
  > LIST MESSAGE DAN BUTTON MESSAGE TIDAK SUPPORT DI WA BISNIS
  > MASIH BANYAK YANG PERLU DI FIX JADI MAKLUMI JIKA ADA FITUR YANG MASIH NGEBUG
  > BELI APIKEY PREMIUM KLO MAU SEMUA FITUR WORK KARENA GAK SEMUA REST API ITU GRATIS
  > KALO MAU RECODE KASIH WM YOGIPW KARENA PEMILIK ASLI SCRIPT INI ADALAH YOGIPW
  > BEBERAPA FITUR GW COPAS(COPY PASTE) DARI BEBERAPA YOUTUBER DAN MASTAH KARENA GW MASIH PEMULA, JANGAN BULI AKU OM
  
  ]----------------- BIG THANKS TO -----------------[
  
  > YogiPw
  > Baileys
  > MhankBarBar
  > DAN PENGEMBANGAN BOT LAINNYA
  > REST API PROVIDER IN MY BOT  
   
  ]-------------- UPDATED BOT WA --------------[

  NOTE :
  > Install Dulu Baru Recode
  > Sebagian fitur butuh apikey vvip atau prem, jadi masih ada fitur yg eror atau ada batas limit nya
  > Sebagian fitur gk work jika jaringan lemot 
  > Script Ori By ( YogiPw ) Jan di Hapus Nanti Error                                                      
*/

const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); //memans
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const {
	createSerial,
} = require("./lib/register.js")
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const _prem = require("./lib/premium");
const { jadibot, stopjadibot, listjadibot } = ("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const game = require("./lib/game");
let petik = '```'
let btang = '*'


//API KEY
const zeksapi = ('apivinz') //JANGAN DI GANTI
const diantoapi = ('hardianto') //JANGAN DI GANTI
const lolkey = ('4c1fb295e5dc6bae35b1b9da') //PAKE APIKEY SENDIRI BIAR GAK CEPET ABIS
const dehanapi = ('cad04cb054df10') //PAKE APIKEY SENDIRI BIAR GAK CEPET ABIS

//SETTING BOTZ
banChats = false; 
offline = false;
ownerName = "Raditya Maulana.R"; //Nama Owner
targetpc = "6283152753417"; //TARGET PC
ownerNumber = ["6285691833783@s.whatsapp.net","62895402101020@s.whatsapp.net"] //LIST OWNER
owner = "6285691833783@s.whatsapp.net"; //OWNER TUNGGAL
botName = "Eagle Botz";
botName1 = "𝐄𝐚𝐠𝐥𝐞 𝐁𝐨𝐭𝐳";
fake = "𝗘𝗔𝗚𝗟𝗘 𝗕𝗢𝗧𝗭";
fake1 = "Handsome";
fake2 = "Created By Raditya";
fakeUrl = "https://wa.me/6281361411375?text=Hai";
thumb = fs.readFileSync("./stik/eagle.jpeg");
thumbb = fs.readFileSync("./stik/eagle2.png");
thumb1 = ("./stik/fake.jpeg"); 
thumb2 = (`https://telegra.ph/file/9d839573c7b513e9f3f77.jpg`) //https://telegra.ph/file/ece6be086e0ddb8e92d2d.jpg
numbernye = "0";
waktu = "-";
alasan = "-";
autojoin = false;
prefixStatus = true;
hit_today = [];

//=================================================//

//GAME
let tebakgambar = [];
let tictactoe = [];

//GAME WAKTU
let gamewaktu = 60
/*
UBAH SESUIA KEINGINAN
60 = 60 DETIK
*/


//SLOT
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']

            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	  
		
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// Sticker Cmd
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = client = async (client, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
    let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = client.user.jid;
    const botNumberss = client.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

//DATABASE
    const premium = JSON.parse(fs.readFileSync("./database/premium.json"));
    const pendaftar = JSON.parse(fs.readFileSync("./database/user.json"));
    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"));
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));
    
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;

    const sender = mek.key.fromMe
      ? client.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? client.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    const isUser = pendaftar.includes(sender)
    const isOwner = ownerNumber.includes(sender)
    const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
    const totalchat = await client.chats.all();
    const m = simple.smsg(client, mek);
    const groupMetadata = isGroup ? await client.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? client.user.jid
      : client.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? client.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
      
      const msgPrivateDev = ownerNumber
      
    //JAM
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
   //JAM TOD
    const jam1 = moment().tz("Asia/Jakarta").format("HH:mm");
    
    //TANGGAL & WETON 
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
//UCAPAN WAKTU NO REST API 
    const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐞𝐧𝐣𝐚";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦";
    }

    //MESSAGE
    const serialUser = createSerial(20)
    mess = {
   
//MESSAGE REGISTER
    verifyButton: "々 𝚅𝙴𝚁𝙸𝙵𝚈 々",
    
    notRegis: `「 𝐍𝐨𝐭 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 」\nMaaf Kak ${pushname} Anda Belum Terdaftar Di Database Bot`,
    
    notRegis1: "Note : Silahkan Klik Tombol Verify Di Bawah\n Jika Button Tidak Muncul Ketik *#verify*",
    
    registered: `*「 𝐒𝐮𝐜𝐞𝐬𝐬 𝐕𝐞𝐫𝐢𝐟𝐞𝐝 」*\n\nKamu Sudah Terdaftar Dengan Data \n\n┏━⊱ Nama\n┗⊱${pushname}\n┏━⊱ Nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱ Waktu Pendaftaran\n┗⊱${time}\n\n┏━❉ *TOTAL USER* ❉━\n┗⊱ ${pendaftar.length}User`,
    
    rediregis: "*「 𝐒𝐮𝐝𝐚𝐡 𝐃𝐚𝐟𝐭𝐚𝐫 」*\n\n*kamu sudah terdaftar di database bot*",
    
//MESSAGE GROUPS & OWNER
    OnlyGrup: "```[ ! ] Maaf Kak Fitur Ini Khusus Group```",
    OnlyOwner: "```[ ! ] Perintah ini hanya dapat digunakan oleh developer bot```",
    
//MESSAGE ERROR & SUCESS
      wait: "```[ ! ] Wait a minutes...```",
      success: "```[ ✓ ] Sukses```",
      wrongFormat: "```[ ! ] Format salah, coba liat lagi di menu```",
      error: {
        stick: "```[ ! ] Maaf Kak Itu Bukan Sticker```",
        Iv: "```[ ! ] link invalid```",
      },
      only: {
        group: "```[ ! ] Maaf Kak Fitur Ini Khusus Group```",
      },
    };
    
    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake + `\n⎇ ${ucapanWaktu} 𝐊𝐚𝐤\n⎇ ${jam1} 𝐖𝐢𝐛`,
          jpegThumbnail: thumb,
        },
      },
    };

async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = ''; 
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
    
    function monospace(string) {
            return '```' + string + '```'
}
    const reply = (teks) => {
      client.sendMessage(from, teks, text, { quoted: fgclink, contextInfo: { forwardingScore: 999, isForwarded: true },sendEphemeral: true});
    };

    const sendMess = (hehe, teks) => {
      client.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? client.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : client.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };

    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 2021,
          status: 200,
          thumbnail: thumb,
          surface: 200,
          message: fake,
          orderTitle: "RayshaBotz.",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },sendEphemeral: true,
    };
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync(thumb),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      client.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: fgclink,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      client.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync(thumb),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("selesai");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            client.sendMessage(to, media, MessageType.sticker, { quoted: fgclink });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/raysha.jpg`), //Gambarnye
            },
            title: "Raysha-Botz", //Kasih namalu
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Raditya",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        client.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
    const sendButMessage = async (
      id, 
     text1, 
      desc1, 
      but = [], 
      options = {}
      ) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(
        id, 
        buttonMessage,
        MessageType.buttonsMessage,
        {quoted: mek, contextInfo: { mentionedJid: [owner], externalAdReply: { title: fake, body: fake2, previewType: "PHOTO", thumbnail: fs.readFileSync(thumb1), thumbnailUrl: thumb2, sourceUrl: fakeUrl}
             }}
      );
    };
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await client.prepareMessage(from, kma, image, {thumbnail: kma});
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: mek, contextInfo: { mentionedJid: [owner], externalAdReply: { title: fake, body: fake2, previewType: "PHOTO", thumbnail: fs.readFileSync(thumb1), thumbnailUrl: thumb2, sourceUrl: fakeUrl}
                }}
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await client.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: fgclink}
      );
    };
    
    const sendButLocation = async (
      id,
      text1,
      desc1,
      loc1,
      but = [],
      options = {}
    ) => {
      kma = loc1;
      _mhan = await client.prepareMessage(from, kma, location, {thumbnail: kma})
      mhan = _mhan.message["ephemeralMessage"] ? _mhan.message.ephemeralMessage : _mhan
      const buttonMessages = {
        locationMessage: mhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6,
      };
      client.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: mek, contextInfo: { mentionedJid: [owner], externalAdReply: { title: fake, body: fake2, previewType: "PHOTO", thumbnail: fs.readFileSync(thumb1), thumbnailUrl: thumb2, sourceUrl: fakeUrl}
                }}
    );
    };
    

    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        client.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      client.groupAdd(from, orangnya);
    };
    const sendBug = async (target) => {
      await client.relayWAMessage(
        client.prepareMessageFromContent(
          target,
          client.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
    };

    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!isOwner) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        client.sendMessage(
          mek.key.remoteJid,
          `@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpegThumbnail: fs.readFileSync(thumb),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!isOwner) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  client.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync(thumb),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }
                 
                
      // Premium
        _prem.expiredCheck(premium) 
    
    //AUTO REGISTER
       /* if (isCmd && !isUser){
			pendaftar.push(sender)
			fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
        } */
        
        //GAME WAKTU
        game.cekWaktuTG(client, tebakgambar)
        
        // GAME TEBAK GAMBAR
        if (game.isTebakGambar(from, tebakgambar) && isUser){
            if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
                await reply(`*Selamat jawaban kamu benar*\n*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
            }
        }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283152753417@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " Anda sudah vote",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      client.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: ftroli }
      );
    };
   
 //ANTI LINK
    //kasih wm gw ajg kalau make ( YOGIPW )
    if (isGroup && isAntilink && !isOwner) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("admin bebas");
        reply("ANTILINK DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, [sender]);
      }
    }
  //ANTI HIDETAG
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      client.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
      kick(from, sender);
    }
        

//ANTI VIRTEX
    if (isGroup && isAntivirtex && !isOwner) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply("Admin Mah Bebas :)");
        reply("「 𝐕𝐢𝐭𝐞𝐱 𝐃𝐞𝐭𝐞𝐜𝐭𝐞𝐝 」\n MAAF ANDA AKAN DIKICK ;V");
        client.groupRemove(from, sender);
      }
    }
    
//AUTO JOIN
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        client.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    
if (budy.toLowerCase() === "hai") {
console.log(`[ CHATS ] ${pushname} - HAI`)
sendButMessage(from, `Hai Juga ${pushname}\nSilahka Klik Tombol Menu Di  Bawah Untuk Melihat Menu Bot`, "Note : Jika Anda Belum Terdaftar Di Database Bot Klik Tombol Verify Di Bawah", [
{ buttonId: `${prefix}menu`, buttonText: {
displayText: `⋮☰ 𝐌𝐄𝐍𝐔`,}, type: 1,},
{ buttonId: `${prefix}verify`, buttonText: {
displayText: `📝 𝐕𝐄𝐑𝐈𝐅𝐘`,}, type: 1,},])
}

    
//ANTI BULE
    if (isGroup && isKickarea && !isOwner) {
      if (sender.includes("62")) {
        reply("GRUP ONLY +62!");
        client.groupRemove(from, [sender]);
      }
    }
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await client.setStatus('[ ✓ ] Bot Online')
    }

    if (!isOwner && banChats === true) return;
 //SCRIPT BY YOGIPW
//JANGAN DI HAPUS KALO GAK ERROR
    switch (command) {
				
  case "verify": case "daftar":
                if (isUser) return  reply(mess.rediregis)
                try {
					ppuser = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                var userid = sender
                var gambernye = await getBuffer(ppuser)
               pendaftar.push(sender)
			   fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
			   var teksnya = mess.registered
			 client.sendMessage(from, gambernye, image, { quoted: fgclink, caption: teksnya, thumbnail: gambernye})
				break
				
      case "menu":
      case "help":
      case "?":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        var ucapan_menu = `${ucapanWaktu} *${pushname}*

${petik}⦿ Jam : ${jam1} WIB${petik}
${petik}⦿ Hari : ${week} ${weton}${petik}
${petik}⦿ Tanggal : ${date}${petik}
`
var menu = `${readmore}
┌──────────────────
╞═══ 《 *${botName1}* 》 ═══
├──────────────────
├≽ *Creator : ${ownerName}*
├≽ *Lib : Baileys V.3.5.1*
├≽ *Prefix : 「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」*
├≽ *Hit Today : ${hit_today.length} Hit*
├≽ *Total User : ${pendaftar.length} User*
├≽ *Total Hit : ${totalhit} Hit*
├≽ *Total Chat : ${totalchat.length} Chat*
├≽ *Tanggal : ${date}*
├≽ *Pukul : ${jam1} WIB*
├≽ *Runtime Bot*
├≽ *${runtime(process.uptime())}*
├──────────────────
╞═══ 《 *𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮* 》 ═══
├──────────────────
┝━◩ *𝙵𝚞𝚗* ◩
├≽ ${prefix}fitnah
├≽ ${prefix}fitnahpc
├≽ ${prefix}slot
├≽ ${prefix}tebakgambar
│
┝━◩ *𝙼𝚊𝚝𝚑 𝚁𝚊𝚗𝚍𝚘𝚖* ◩
├≽ ${prefix}gantengcek
├≽ ${prefix}cantikcek
├≽ ${prefix}apakah
├≽ ${prefix}kapankah
├≽ ${prefix}bisakah
├≽ ${prefix}rate
├≽ ${prefix}hobby
├≽ ${prefix}truth
├≽ ${prefix}dare${isGroup ? `
│
┝━◩ *𝙾𝚗𝚕𝚢 𝙶𝚛𝚘𝚞𝚙* ◩
├≽ ${prefix}grup [open/close]
├≽ ${prefix}promote <reply chat member>
├≽ ${prefix}demote <reply chat member>
├≽ ${prefix}setdesc
├≽ ${prefix}setname
├≽ ${prefix}kick <reply/tag member>
├≽ ${prefix}add <reply/tag member>
├≽ ${prefix}getbio <reply chat member>
├≽ ${prefix}getname <reply chat member>
├≽ ${prefix}reminder <msg/2s>
├≽ ${prefix}listonline
├≽ ${prefix}sider [reply chat bot]
├≽ ${prefix}antilink
├≽ ${prefix}antihidetag
├≽ ${prefix}antiviewonce
├≽ ${prefix}antivirtex
├≽ ${prefix}kickarea` : '' }
│
┝━◩ *𝙼𝚊𝚔𝚎𝚛* ◩
├≽ ${prefix}emoji
├≽ ${prefix}sticker
├≽ ${prefix}fdeface
├≽ ${prefix}tts id <teks>
├≽ ${prefix}swm <author|packname>
├≽ ${prefix}take <author|packname>
├≽ ${prefix}kontak <nomor|name>
│
┝━◩ *𝙲𝚘𝚗𝚟𝚎𝚛𝚝* ◩
├≽ ${prefix}toimg
├≽ ${prefix}tomp3
├≽ ${prefix}tomp4
├≽ ${prefix}slow
├≽ ${prefix}fast
├≽ ${prefix}reverse
├≽ ${prefix}tourl
│
┝━◩ *𝙳𝚘𝚠𝚗𝚘𝚊𝚍𝚎𝚛* ◩
├≽ ${prefix}youtube <url>
├≽ ${prefix}tiktok <url>
├≽ ${prefix}instagram <url>
├≽ ${prefix}twitter <url>
│
┝━◩ *𝙾𝚝𝚑𝚎𝚛* ◩
├≽ ${prefix}ping
├≽ ${prefix}inspect
├≽ ${prefix}join
├≽ ${prefix}caripesan <query>
├≽ ${prefix}get
├≽ ${prefix}ytsearch <query>
├≽ ${prefix}igstalk <query>
├≽ ${prefix}githubstalk <query>
├≽ ${prefix}tiktokstalk <query>
├≽ ${prefix}play <query>
├≽ ${prefix}video <query>
├≽ ${prefix}igstory <username>
├≽ ${prefix}twitter <link>
├≽ ${prefix}tiktok <link>
├≽ ${prefix}tiktokaudio <link>
├≽ ${prefix}fb <link>
├≽ ${prefix}brainly <query>
├≽ ${prefix}image <query>
├≽ ${prefix}anime <random>
├≽ ${prefix}pinterest <query>
├≽ ${prefix}komiku <query>
├≽ ${prefix}lirik <query>
├≽ ${prefix}chara <query>
├≽ ${prefix}playstore <query>
├≽ ${prefix}otaku <query>
│
┝━◩ *𝙹𝚊𝚍𝚒 𝙱𝚘𝚝* ◩
├≽ ${prefix}jadibot
├≽ ${prefix}stopjadibot
├≽ ${prefix}listbot
│
┝━◩ *𝚅𝚘𝚝𝚎* ◩
├≽ ${prefix}voting
├≽ ${prefix}delvote
├≽ vote
├≽ devote
│
┝━◩ *𝚃𝚊𝚐* ◩
├≽ ${prefix}hidetag
├≽ ${prefix}kontag
├≽ ${prefix}sticktag
├≽ ${prefix}totag
│
┝━◩ *𝚄𝚙 𝚂𝚝𝚘𝚛𝚢* ◩
├≽ ${prefix}upswteks
├≽ ${prefix}upswimage
├≽ ${prefix}upswvideo
│
┝━◩ *𝚂𝚝𝚒𝚌𝚔𝚎𝚛 𝙲𝚖𝚍* ◩
├≽ ${prefix}addcmd
├≽ ${prefix}delcmd
├≽ ${prefix}listcmd
│
┝━◩ *𝙾𝚗𝚕𝚢 𝙾𝚠𝚗𝚎𝚛* ◩
├≽ ${prefix}off
├≽ ${prefix}on
├≽ ${prefix}status
├≽ ${prefix}setthumb
├≽ ${prefix}settarget
├≽ ${prefix}setfakeimg
├≽ ${prefix}setprefix
├≽ ${prefix}setreply
├≽ ${prefix}setnameB
├≽ ${prefix}setbioB
├≽ ${prefix}mode 
├≽ ${prefix}term <code>
├≽ ${prefix}eval <code>
├≽ ${prefix}colongsw [reply sw]
├──────────────────
╞═══ 《 *${botName1}* 》 ═══
└──────────────────
`;
        sendButLocation(from, ucapan_menu, menu, thumbb, [
          {
            buttonId: `${prefix}ping`,
            buttonText: {
              displayText: `々 𝙿𝙸𝙽𝙶 々`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: `々 𝙾𝚆𝙽𝙴𝚁 々`,
            },
            type: 1,
          },
        ]);
break;

      case "owner": case "creator": {
   	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        let owner_list = []
for (let i of ownerNumber) {
const vname = client.contacts[i] != undefined ? client.contacts[i].vname || client.contacts[i].notify : undefined
owner_list.push({
"displayName": `Developer ${botName}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;;;;\nFN:${vname ? `${vname}` : `${client.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
client.sendMessage(from, {
"displayName": `Developer ${botName}`,
"contacts": owner_list 
}, 'contactsArrayMessage', { quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true }})
                .then((res) => client.sendMessage(from, 'Nih kontak ownerku', text, {quoted: res}))
                }
        break;
        
        case "kisahnbi": case "kisahnabi":
        if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Muhammad*`)
                    get_args = args.join(" ")
                    get_result = await fetchJson(`https://hardianto-chan.herokuapp.com/api/muslim/kisahnabi?nabi=${get_args}&apikey=hardianto`)
                    get_data = get_result.result
                    ini_txt = `*KISAH NABI*\n`
                    ini_txt += `Nama : ${get_data.name}\n`
                    ini_txt += `Kelahiran : ${get_data.kelahiran}\n`
                    ini_txt += `Wafat Usia : ${get_data.wafat_usia}\n`
                    ini_txt += `Singgah : ${get_data.singgah}\n`
                    ini_txt += `Kisah : ${get_data.kisah}`
                    reply(ini_txt)
                    break
                    
                    case "buggc":
                //WARNING BISA BIKIN GC MU LAAGG
                if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                    if (!isGroup)return reply(mess.OnlyGrup)
                    if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                    if (isNaN(args[0])) return reply(`Harus berupa angka`) 
                    var buggg = q
                    for (let i = 0; i < buggg; i ++){
                    sendBug(from)
                    }
                    await reply(`Suksess Send Bug Sebanyak ${buggg}`)
                    break
      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (isQuotedSticker) {
          if (!q)
            return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          sendButMessage(from, "```[ ✓ ] Done```", "Note Silahkan Klik Tombol Di Bawah Untuk Melihat List Cmd", [
            { buttonId: `${prefix}listcmd`, buttonText: {
               displayText: `𝗟𝗜𝗦𝗧 𝗖𝗠𝗗`,}, type: 1,},])
        } else {
          reply("tag stickenya");
        }
        break;
      case "delcmd":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedSticker)
          return reply(`Penggunaan : ${command} tagsticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Done!");
        break;
      case "listcmd":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
      //------------------< Fitur Game >-------------------
      
      //SLOT
      case 'slot':{	
			    if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
				   slot = `===================\n` 
				   slot += `${slot11} | ${slot22} | ${slot33}\n`
				   slot += `${slot44} | ${slot55} | ${slot66} <====\n`
				   slot += `${slot77} | ${slot88} | ${slot99}	\n`				   
				   slot += `===================\n`
				   sendButMessage(from, slot, ` `, [
            { buttonId: `${prefix}menu`, buttonText: {
               displayText: `𝗕𝗔𝗖𝗞 𝗠𝗘𝗡𝗨`,}, type: 1,},
            { buttonId: `${prefix}slot`, buttonText: {
               displayText: `𝗡𝗘𝗫𝗧`,}, type: 1,},
          ]);
          }
				   break
      
      //TICTACTOE
      case 'tictactoe': case 'ttt': case 'ttc':
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
      if (!isGroup)return reply(mess.OnlyGrup)
      if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
                if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                if (mentioned.length !== 0){
						if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
                        let h = randomNomor(100)
                        mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/T) untuk bermain\n\nHadiah : ${h} balance`), [sender, mentioned[0]], false)
                        tictactoe.push({
                            id: from,
                            status: null,
                            penantang: sender,
                            ditantang: mentioned[0],
                            TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                        })
                        gameAdd(sender, glimit)
                } else {
                    reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                }
                break
      break
      
      //TEBAK GAMBAR
case "tebakgambar":{
if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
                let anu = await axios.get(`https://api.zeks.xyz/api/tebakgambar?apikey=${zeksapi}`)
                const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
                let TeksGam = `Silahkan jawab soal berikut ini\n\nWaktu : ${gamewaktu}s\nTingkat : ${anu.data.result.tingkat}\nJawab Dengan Benar Kalo Gak Donasi?`
                let Tebakimg = await getBuffer(anu.data.result.soal)
                sendButImage(from, TeksGam, "Note : Kalo Jawabannya Susah Klik Tombol Hint Di Bawah?", Tebakimg, [
                {
            buttonId: `${prefix}hinttg ${petunjuk}`,
            buttonText: {
              displayText: `𝗛𝗜𝗡𝗧`,
            },
            type: 1,
          },
        ]);
                let anih = anu.data.result.jawaban.toLowerCase()
                game.addgambar(from, anih, gamewaktu, tebakgambar)
}
break
//HINT TEBAK GAMBAR
case "hinttg":
var hinttg = q
reply(`${petik}◉ HINT : ${hinttg}${petik}`)
	break
//------------------< Math Random >-------------------
	
	case 'gantengcek':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let tejs = `Cowok paling ganteng di group ini adalah\n*@${aku.jid.split('@')[0]}*`
					mentions(tejs, [aku.jid, cintax.jid], true)
					break
				case 'cantikcek':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let gejs = `Cewek� paling cantik di group ini adalah\n*@${cintax.jid.split('@')[0]}*`
					mentions(gejs, [aku.jid, cintax.jid], true)
					break
					case 'jadian':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					if (!isGroup)return reply(mess.OnlyGrup)
					var kamu = groupMembers
					var cinta = groupMembers
					var aku = cinta[Math.floor(Math.random() * kamu.length)]
					var cintax = kamu[Math.floor(Math.random() * cinta.length)]
					let vejs = `Ciee.. yang lagi jadian\n*@${aku.jid.split('@')[0]}* ♥️ @${cintax.jid.split('@')[0]}\nSemoga Langgeng Ya?`
					mentions(vejs, [aku.jid, cintax.jid], true)
					break
				case 'seberapagay':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
				axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
				fakestatus(`Nih Liat Data Gay Si ${q}

Persentase Gay : ${res.persen}%
Alert!!! : ${res.desc}`))
				break
				case 'bisakah':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + keh, text, { quoted: msg })
					break
					case 'kapankah':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + koh, text, { quoted: msg })
					break

				case 'apakah':
				if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + kah, text, { quoted: msg })
					break

				case 'rate':
	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + te + '%', text, { quoted: msg })
					break

				case 'hobby':
				if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : ' + q + '\n\nJawaban : ' + by, text, { quoted: msg })
					break

				case 'truth':
				if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					client.sendImage(from, await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`), 'Truth\n\n' + ttrth, msg)
					break

				case 'dare':
                if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					client.sendImage(from, await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`), 'Dare\n\n' + der , msg)
					break
				case 'cekbapak': // By Ramlan ID
				if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
					const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk By : Ramlan ID']
					const cek = bapak[Math.floor(Math.random() * bapak.length)]
					client.sendMessage(from, cek, text, { quoted: msg })
					break
//------------------< NULIS >---------------------

            case 'nulis': case 'nuliskanan':
            if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
            if (args.length < 2) return reply(`Kirim perintah *${prefix}nulis* teks`)
                reply(mess.wait)
                var nulis1 = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${q}&apikey=${zeksapi}`)
                client.sendMessage(from, nulis1, image, {caption: `*Nih PR Mu?*\n*Mana Bayarannya?*`, quoted: fgclink})
                break
                
            case 'nuliskiri':{
            	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                var nkiri = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${tulisan}`)
                client.sendMessage(from, nkiri, image, {caption: 'Nih, Jangan Males Ya?', quoted: fgclink})
            }
                break
            case 'foliokiri':{
            	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
               var foliokiri = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${tulisan}`)
                client.sendMessage(from, foliokiri, image, {caption: 'Nih Om?', quoted: fgclink})
            }
                break
            case 'foliokanan':{
                if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                var foliokanan = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${tulisan}`)
                client.sendMessage(from, foliokanan, image, {caption: 'Nih Om?', quoted: fgclink})
            }
                break
//------------------< Fitur Anti antian >-------------------
      case "antilink":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !isOwner) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntilink) return reply("Sudah aktif!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mengaktifkan antilink!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("Sukses mematikan antilink!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `𝗢𝗡`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `𝗢𝗙𝗙`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !isOwner) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `𝗢𝗡`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `𝗢𝗙𝗙`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !isOwner) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Sudah aktif!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mengaktifkan antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Sukses mematikan antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `𝗢𝗡`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `𝗢𝗙𝗙`,
                },
                type: 1,
              },
            ]
          );
        }
        break;

      case "autojoin":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply("Khusus di grup");
        if (!isOwner) return reply("Khusus owner");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Sudah aktif!!");
          autojoin = true;
          reply("Sukses mengaktifkan autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Sukses mematikan autojoin!");
        } else if (!q) {
          sendButImage(from, `MODE AUTOJOIN`, `Silahkan pilih salah satu`, thumb, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `𝗢𝗡`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `𝗢𝗙𝗙`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !isOwner) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntivirtex) return reply("Sudah aktif!!");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("Sukses mengaktifkan antivirtex!");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("Sukses mematikan antivirtex!");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `𝗢𝗡`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `𝗢𝗙𝗙`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !isOwner) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `𝗢𝗡`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `𝗢𝗙𝗙`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case "listonline": //copas dari stikerinbot
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(client.chats.get(id).presences),
            client.user.jid,
          ];
          client.reply(
            m.chat,
            "┌─〔 Daftar Online 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;

      case "sider": //copas dari stikerinbot
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!m.quoted) throw `Balas pesan bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await client.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await client.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: client.parseMention(txt),
          },
        });
        break;
      case "q":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!m.quoted) return reply("reply message!");
        let qse = client.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !isOwner) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
       mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Tag target yang ingin di kick!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          client.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          client.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          client.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
      case "add":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !isOwner) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply("Bot not admin");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          add(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          client.groupAdd(from, [anu]);
          reply(mess.success);
        } else {
          add(from, mentioned);
          reply(mess.success);
        }
        break;
      case "getbio":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await client.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          client.contacts[ambl] != undefined
            ? client.contacts[ambl].sname || client.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateDescription(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change description group", text, {
          quoted: fgclink,
        });
        break;
      // Set Name Group
      case "setname":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.groupUpdateSubject(from, `${args.join(" ")}`);
        client.sendMessage(from, "Succes change name group", text, {
          quoted: fgclink,
        });
        break;
      // Group Info
      case "groupinfo":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroup) return;
        ppUrl = await client.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        client.sendMessage(from, buffergbl, image, {
          quoted: fgclink,
          caption: `\`\`\`「 Group Info 」\`\`\`\n*•> Name* : ${groupName}\n*•> Member* : ${groupMembers.length}\n*•> Admin* : ${groupAdmins.length}\n*•> Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupDemoteAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes demote`;
        client.sendMessage(from, teks, text, {
          quoted: fgclink,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
      // Promote Members
      case "promote":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Admin Group Only");
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Reply members");
        mentionede = mek.message.extendedTextMessage.contextInfo.participant;
        client.groupMakeAdmin(from, [mentionede]);
        teks = `Members @${mentionede.split("@")[0]} succes promote`;
        client.sendMessage(from, teks, text, {
          quoted: fgclink,
          contextInfo: { mentionedJid: [mentionede] },
        });
        break;
        case "grup":
      case "group":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroupAdmins) return reply('*Perintah ini hanya bisa digunakan oleh Admin Grup?*');
        if (!isBotGroupAdmins) return reply('*Bot Harus menjadi admin?*')
        if (!isGroup) return reply(mess.only.group);
        try {
                    var pic = await client.getProfilePicture(from)
                } catch {
                    var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                }
        sendButImage(from, `❒ 𝐆𝐫𝐮𝐩 𝐍𝐚𝐦𝐞 : *${groupName}*`, `Available Group Setting`, await getBuffer(pic), [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `𝗢𝗣𝗘𝗡`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `𝗖𝗟𝗢𝗦𝗘`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `𝗥𝗘𝗩𝗢𝗞𝗘 𝗜𝗡𝗩𝗜𝗧𝗘`,
            },
            type: 1,
          },
        ]);
        break;
      case "closegc":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "revoke":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        client.revokeInvite(from);
        reply("```Succes revoke link group```");
        break;
      case "opengc":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        client.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Slavyan
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q)
          return reply(
            `CONTOH PENGGUNANNYA:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              client.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await client.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ Untuk: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              client.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              client.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
//------------------< Jadi Bot >-------------------
        
      case "jadibot":
        if (mek.key.fromMe) return reply("Tidak bisa jadibot di dalam bot");
        jadibot(reply, client, from);
        break;
      case "stopjadibot":
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
          return reply("tidak bisa stopjadibot kecuali owner");
        stopjadibot(reply);
        break;
      case "listbot":
        let tekss = "「 *LIST JADIBOT* 」\n";
        for (let i of listjadibot) {
          tekss += `*Nomor* : ${i.jid.split("@")[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;
//------------------< OWNER MENU >-------------------
      case "setprefix":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        sendButImage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Silahkan pilih salah satu`, thumb, 
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `𝗡𝗢 𝗣𝗥𝗘𝗙𝗜𝗫`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `𝗠𝗨𝗟𝗧𝗜 𝗣𝗥𝗘𝗙𝗜𝗫`,
              },
              type: 1,
            },
          ]
        );
        break;
      case "mode":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        sendButImage(from, `MODE SELF/PUBLIC`, `Silahkan pilih salah satu`, thumb, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `𝗦𝗘𝗟𝗙 𝗠𝗢𝗗𝗘`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `𝗣𝗨𝗕𝗟𝗜𝗖 𝗠𝗢𝗗𝗘`,
            },
            type: 1,
          },
        ]);
        break;
        
        case "setnameB":{
        	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                var bio = q ? q : '-'
                client.updateProfileName(q)
                .then((res) => reply(jsonformat(res)))
				.catch((err) => reply(jsonformat(err)))
            }
                break
                
        case "setbioB":{
        	if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
                if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
                var bio = q ? q : '-'
                client.setStatus(bio)
                .then((res) => reply(jsonformat(res)))
				.catch((err) => reply(jsonformat(err)))
            }
                break
                
      //end
      //------------------< Fitur downloader >-------------------
      case "tiktok":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}&apikey=${dehanapi}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Komentar*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `𝗩𝗜𝗗𝗘𝗢`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `𝗔𝗨𝗗𝗜𝗢`,
              },
              type: 1,
            },
          ]
        );
        break;

      case "youtube":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isUrl(args[0]) && !args[0].includes("youtu"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/video?url=${args[0]}&apikey=${dehanapi}`
        );
        var b = bv.result.creator_metadata;
        var tamnel = await getBuffer(bv.result.media_resources.thumbnail);
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝙳*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

${petik}▢ Title: ${a.title}${petik}
${petik}▢ Like: ${a.totalLikes}${petik}
${petik}▢ Dislike: ${a.totalDislikes}${petik}
${petik}▢ Views: ${a.totalViews}${petik}
${petik}▢ Yt Name: ${b.name}${petik}
`,
          `Silahkan pilih salah satu format yg mau didownload`,
          tamnel,
          [
            {
              buttonId: `${prefix}ytdl ${args[0]}|video`,
              buttonText: {
                displayText: `??𝗜𝗗𝗘𝗢`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}ytdl ${args[0]}|music`,
              buttonText: {
                displayText: `𝗔𝗨𝗗𝗜𝗢`,
              },
              type: 1,
            },
          ]
        );
        break;
      //JCCHCCGHTHDTRSRS
      case "twitter":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("Linknya?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: fgclink,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: fgclink,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "tiktokdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${link}`
        );
        console.log(bv)
        if (tipe === "audio") {
          sendMediaURL(from, bv.result.media_resources.music.playUrl, "");
        } 
         if (tipe === "video") {
          sendMediaURL(from, bv.result.media_resources.video.videoUrl, "");
        }
        break;
      case "ytdl":
        var gh = args.join("");
        var link = gh.split("|")[0];
        var tipe = gh.split("|")[1];
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/youtube/${tipe}?url=${link}&apikey=${dehanapi}`
        );
        if (tipe == "video") {
          sendMediaURL(from, bv.result.media_resources.videoUrl, "");
        }
        if (tipe == "music") {
          sendMediaURL(from, bv.result.media_resources.musicUrl, "");
        }
        break;
      case "noprefix":
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Berhasil mengganti prefix menjadi noprefix");
        break;
      case "multiprefix":
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Berhasil mengganti prefix menjadi multiprefix");
        break;

      case "delvote":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("Tidak ada sesi Voting");
        delVote(from);
        reply("Sukses Menghapus sesi Voting Di Grup Ini");
        break;
      case "voting":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isGroupAdmins && !isOwner) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Sesi Voting Sedang Berlangsung Di Grup Ini");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Menit)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("cari group apa?");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
      case "igstalk":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("Usernamenya?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Jumlah postingan: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        client.sendMessage(from, buff, image, { quoted: fgclink, caption: tt });
        break;
      case "githubstalk":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("Usernamenya?");
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=dehan-j1ng`
        );
        const mm = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *𝙶𝙸𝚃𝙷𝚄𝙱 𝚂𝚃𝙰𝙻𝙺*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

    ▢ Username: ${oi.result.username}
    ▢ Fullname: ${oi.result.name}
    ▢ Bio: ${oi.result.user_bio}

    ▢ Jumlah repo: ${oi.result.user_repo}
    ▢ Following: ${oi.result.user_following}
    ▢ Follower: ${oi.result.user_followers}`;
        reply(mm);
        break;
      case "tiktokstalk":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("Usernamenya? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *𝚃𝙸𝙺𝚃𝙾𝙺 𝚂𝚃𝙰𝙻𝙺*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

    ▢ Username: ${q}
    ▢ Nickname: ${i.result.user.nickname}
    ▢ Bio: ${i.result.user.signature}

    ▢ Jumlah postingan: ${i.result.stats.videoCount}
    ▢ Following: ${i.result.stats.followingCount}
    ▢ Follower: ${i.result.stats.followerCount}`;
        client.sendMessage(from, buff, image, { quoted: fgclink, caption: ii });
        break;
      case "igstory":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("Usernamenya?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, video, {
                quoted: fgclink,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              client.sendMessage(from, link, image, {
                quoted: fgclink,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case "colongsw": // Case by Arifi Razzaq
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          client.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          client.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong");
        }
        break;
      case "caripesan": //COPAS DARI ARIFI RAZZAQ
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("pesannya apa bang?");
        let v = await client.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Ditemukan ${el.length} pesan`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await client.sendMessage(from, "Nih pesannya", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("Pesan tidak ditemukan!");
        }
        break;
      case "lirik":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("lagu apa?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("judul animenya?");
        let anime = await hx.otakudesu(q);
        rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        client.sendMessage(from, ram, image, { quoted: fgclink, caption: rem });
        break;
      case "komiku":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *𝙺𝙾𝙼𝙸𝙺𝚄*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

▢ *Title* : ${komik.title}\n
▢ *Title Indo* : ${komik.indo}\n
▢ *Update* : ${komik.update}\n
▢ *Desc* : ${komik.desc}\n
▢ *Chapter Awal* : ${komik.chapter_awal}
▢ *Chapter Akhir* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "chara":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply(`gambar apa?\n${prefix}chara client`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await client.sendMessage(from, li, image, { quoted: fgclink });
        break;
      case "pinterest":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("gambar apa?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await client.sendMessage(from, di, image, { quoted: fgclink });
        break;
      case "playstore":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("lu nyari apa?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
▢ *Nama* : ${i.name}
▢ *Link* : ${i.link}\n
▢ *Dev* : ${i.developer}
▢ *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
        case "status":
        if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
        
      case "on":
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        offline = false;
        await client.setStatus('[ ✓ ] Bot Online')
        fakestatus(" ```ANDA TELAH ONLINE``` ");
        break;
      
      case "off":
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        client.setStatus('[✖️] Bot Offline')
        fakestatus(" ```ANDA TELAH OFFLINE``` ");
        break;
        
      case "get":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("linknya?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "kontag":
        if (!isOwner) return reply("Only Owner");
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: fgclink,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker yang sudah dikirim*`);
        }
        break;
      case "totag":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: fgclink,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: fgclink,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: fgclink,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: fgclink,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "fitnah":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        client.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply(`${prefix}settarget 628xxxxx`);
        targetpc = args[0];
        fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`);
        break;
      case "fitnahpc":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // nomer target
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await client.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await client.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: fgclink,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: fgclink,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            client.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: fgclink,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedVideo) return fakegroup("Reply videonya!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          client.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: fgclink,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                client.sendMessage(from, media, image, {
                  quoted: fgclink,
                  caption: "NIH",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
        case "tts":
        if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: fgclink})					 
					if (args.length < 2) return client.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: fgclink})
					const dtt = body.slice(8)
					const gtts = require("./lib/gtts")(args[0])
					const ranm = getRandom('.mp3')
					const rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan cayank!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('ERROR')
					client.sendMessage(from, buffer, audio, {ptt:true, quoted: fgclink})
					fs.unlinkSync(rano)
					})
					})
        break
      case "kontak":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        client.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
      case "take":
      case "colong":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedSticker) return reply("Stiker aja om");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./lib/fetcher.js").createExif(satu, dua);
        require("./lib/fetcher.js").modStick(media, client, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await client.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: fgclink,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: fgclink }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              client.sendMessage(from, "Terjadi kesalahan", "conversation", {
                quoted: fgclink,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                client.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: fgclink }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`
          );
        }
        break;
      case "upswteks":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return fakestatus("Isi teksnya!");
        client.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
      case "upswimage":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Image dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply gambarnya!");
        }
        break;
      case "upswvideo":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await client.downloadMediaMessage(swsw);
          client.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Sukses Upload Story Video dengan Caption: ${q}`;
          client.sendMessage(from, bur, text, { quoted: fgclink });
        } else {
          fakestatus("reply videonya!");
        }
        break;
      case "fdeface":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await client.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await client.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        client.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
      case "public":
        if (!isOwner) return fakestatus("SELF-BOT");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakestatus(`「 *PUBLIC-MODE* 」`);
        break;
      case "self":
        if (!isOwner) return fakestatus("SELF-BOT");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakestatus(`「 *SELF-MODE* 」`);
        break;
      case "hidetag":
        if (!isOwner) return fakestatus("SELF-BOT");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await client.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: fgclink,
        };
        client.sendMessage(from, optionshidetag, text);
        break;
      case "play":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          yta(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "video":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length === 0)
          return reply(
            `Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await client.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`);
            })
            .on("end", function () {
              console.log("Finish");
              client.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`
          );
        }
        break;
      case "toimg":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await client.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Yah gagal, coba ulangi ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, "NIH");
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length < 1) return reply("Tolong masukan query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await client.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Title: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Durasi: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *EAGLE BOTZ*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Succes Mengganti Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/fake.jpeg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await client.downloadMediaMessage(boij);
          fs.writeFileSync(`./stik/raysha.jpg`, delb);
          fakestatus("Sukses");
        } else {
          reply(`Kirim gambar dengan caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return fakegroup("emojinya?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length < 1) return reply("Apa Yang Mau Dicari?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (args.length < 1) return reply("Pertanyaan apa");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          client.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return fakegroup("Usernamenya?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!q) return reply("Linknya?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return fakestatus("Masukan link group");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("pastikan link sudah mekar!");
          var response = await client.acceptInvite(codeInvite);
          fakestatus("SUKSES");
        } catch {
          fakegroup("LINK ERROR!");
        }
        break;
      case "runtime":
      case "test":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          fakegroup(pingnya);
        });
        break;
      case "totag":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await client.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await client.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          client.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await client.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          reply("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await client.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("kirim/reply gambar/video");
        }
        break;
      case "inspect":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("masukan link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("pastikan itu link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await client.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : tidak ada"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc diubah oleh* : @${descOwner.split("@")[0]}`
    : "*Desc diubah oleh* : -"
}\n*Tanggal* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Kontak yang tersimpan*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Ya" : "Tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          client.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "eval":
      if (!isUser) return sendButMessage(from, mess.notRegis, mess.notRegis1, [{ buttonId: `${prefix}verify`, buttonText: {displayText: verifyButton,}, type: 1,},])
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
        client.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
      default:
        if (_chats.startsWith(">")) {
          try {
            return client.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[TEXT]", "red"),
        "SELF-MODE",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("c.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};
