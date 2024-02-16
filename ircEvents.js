ircClient.addListener(`message${setchannel}`, function (from, message) {
    const msg = removeUselessWords(`${setchannel} => ` + from + ': ' + message);

    discordClient.channels.cache.get('DISCORD CHAT CHANNEL ID').send("`" + msg + "`");
});

discordClient.on('messageCreate', function (msg) {
    const message = msg.content;

    ircClient.say(`${setchannel}`, "13" + msg.author.displayName + ': ')
    ircClient.say(`${setchannel}`, message);

    ircClient.say(`${setchannel}`, "10" + msg.author.displayName + ': ')
    ircClient.say(`${setchannel}`, message);

});

ircClient.addListener('error', function (message) {
    console.log('error: ', message);
});