// Description:
//  Scripts med random trumpbot morro
// Commands:
//  Hubot quote - I will quote one of my awesome quotes

quotes = [
  "I will build a great wall – and nobody builds walls better than me, believe me ...",
  "The beauty of me is that I’m very rich.",
  "It’s freezing and snowing in New York – we need global warming!",
  "The point is, you can never be too greedy.",
  "I’m just thinking to myself right now, we should just cancel the election and just give it to Trump, right?",
  "Despite the constant negative press covfefe",
  "Yes, Arnold Schwarzenegger did a really bad job as Governor of California and even worse on the Apprentice…but at least he tried hard!",
  "Fake news is at an all time high. Where is their apology to me for all of the incorrect stories???"
]

module.exports = (robot) => {
  robot.hear(/wall/, (msg) => {
    msg.send("WE WILL BUILD THAT WALL!!");
  })
  robot.hear(/cnn/, (msg) => {
    msg.send("#fakenews");
  })
  robot.hear(/aftenposten/, (msg) => {
    msg.send("#fakenews");
  })
  robot.hear(/mål/, (msg) => {
    msg.send("Make Slack Great Again!");
  })
  robot.topic((msg) => {
    msg.send("I approve of this topic, just remember i am the most important topic");
  })
  robot.enter((msg) => {
    msg.send("I welcome you to the greates channel in the world. And it is of course great because i am in it :smirk:");
  })

  robot.respond(/quote/, (msg) => {
    msg.reply(msg.random(quotes))
  })
}
