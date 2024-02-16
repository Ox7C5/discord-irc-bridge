import * as ircEvents from 'ircEvents.js';
import * as discordEvents from 'discordEvents.js';
import * as helpers from 'helpers.js'

const { Client, GatewayIntentBits } = require('discord.js');
const irc = require('irc');

const ircConfig = {
    channels: ['#sirdal'],
    server: 'irc.libera.chat',
    botName: 'OxBridge',
};

const ircClient = new irc.Client(ircConfig.server, ircConfig.botName, {
    channels: ircConfig.channels,
});
/*
const discordConfig = {
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
};

const discordClient = new Client(discordConfig);
discordClient.login('DISCORD BOT TOKEN');
*/
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('discord-irc-bridge');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
