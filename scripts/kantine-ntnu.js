// Description:
//   Script for få dagens middag på diverse kantiner på NTNU
//   Burde også si i fra hvis det ikke er noe mat i dag
//
// Commands:
//   hubot hva er dagens middag på <kantine>


const cheerio = require('cheerio');
const moment = require('moment');

const baseUrl = "https://www.sit.no/middag/";

module.exports = function (robot) {
    robot.respond(/hva er dagens middag på (\w+)/, function(msg){
        const url = baseUrl + msg.match[1]

        robot.http(url).get()(function(error, respose, body){
          const $ = cheerio.load(body);
          const middager = $('.dishes__dishes');

          const ukedag = moment().weekday() - 1;
          const dagensMiddag = $(middager.get(ukedag)).text();

          const fancyDagensMiddag = "```" + fancy(dagensMiddag) + "```"
          msg.reply(dagensMiddag);
        });

    })
}

function fancy(tekst) {
  //regex magi
  return tekst
    .replace(/ +(?= )/g, '')
    .replace(/^\s*[\r\n]/gm, "\n")
    .replace(/^ +/gm, '').trim();
}
