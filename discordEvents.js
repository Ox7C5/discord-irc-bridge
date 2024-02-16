discordClient.on('messageCreate', function (msg) {
    const message = msg.content;

    ircClient.say(`${setchannel}`, "13" + msg.author.displayName + ': ')
    ircClient.say(`${setchannel}`, message);

    ircClient.say(`${setchannel}`, "10" + msg.author.displayName + ': ')
    ircClient.say(`${setchannel}`, message);

});