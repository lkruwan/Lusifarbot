

/* Copyright (C) 2021 RAMIYA - Alexa Team.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
RAMIYA - Alexa Team
*/
// 😡 අදත් ආවද Code එක උස්සන්න තිරිසනො  😖

// -----------------------------------------------------------------------------------------------------------------------------
//  ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ---- ALEXA BOT ----
// -----------------------------------------------------------------------------------------------------------------------------

const Ramiya = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { fetchJson } = require('../Fetcher')
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Xdesc = "*XNXX වීඩියෝ බාගත කරයි.*"
const XN_NEED = "😏 *Enter XNXX URL*\n 🎥 *Example* : _.xnx https://www.xnxx.com/video-zgvf7ee/home_fuck_"
//const XH_NEED = "😏 *Enter XHAMSTER URL*\n 🎥 *Example* : _.xhx https://www_"
const DWLOAD_VID = "🤫 *Downloading Your Video...*"
const YTV_UP = "🔞 *Uploading Your Video...*"
const NO_RESULT = "*🤯 Oops Video Not Found...*"
const Need = "😏 *Enter Some Words.*"
const Searching = "🔞 _*Searching Xnxx Adult Videos...*_"
//const XHSearching = "🔞 _*Searching Xhamster Adult Videos...*_"
const credit = "* Powered BY Lusifar*" 
let tp1 = Config.WORKTYPE == 'public' ? false : true
let tp2 = Config.WORKTYPE == 'public' ? true : false


	// -------------------------------------X-N-X-X--S-E-A-R-C-H------------------------------------------------------------------------
	
Ramiya.addCommand({ pattern: 'getxnx ?(.*)', fromMe: tp1 , dontAddCommandList:true}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	        await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var url = `https://zenzapi.xyz/api/xnxx/search?query=${match[1]}&apikey=f55909b302`
			
			const header = `*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*
 *Lusifar XNXX SEARCH* 
◄━━━━━━⦁⦁◯⦁⦁━━━━━━►`
			
      azure_result = await fetchJson(`${url}`)
                      azure_result = azure_result.result
                      content = ""
                      for (var x of azure_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                      //  content += `Info : ${x.info}\n`
                          content += `🔗 *Link* : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,header+'\n\n'+content,MessageType.text, {quoted: message.data});
	  
    })
	
Ramiya.addCommand({ pattern: 'getxnx ?(.*)', fromMe: tp2 ,dontAddCommandList:true}, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Need,MessageType.text);    
	        await message.client.sendMessage(message.jid,Searching,MessageType.text);

			var url = `https://zenzapi.xyz/api/xnxx/search?query=${match[1]}&apikey=f55909b302`
			
			const header = `*◄━━━━━━⦁⦁◯⦁⦁━━━━━━►*
 *Lusifar XNXX SEARCH*
◄━━━━━━⦁⦁◯⦁⦁━━━━━━►`
			
      azure_result = await fetchJson(`${url}`)
                      azure_result = azure_result.result
                      content = ""
                      for (var x of azure_result) {
                          content += `🪀 *Title* : ${x.title}\n`
                      //  content += `Info : ${x.info}\n`
                          content += `🔗 *Link* : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,header+'\n\n'+content,MessageType.text, {quoted: message.data});
	  
    })
