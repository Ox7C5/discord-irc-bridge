//import * as ircEvents from 'ircEvents.js';
//import * as discordEvents from 'discordEvents.js';
//import * as helpers from 'helpers.js'

const env = require('dotenv').config();
console.log(process.env);

const { Client, GatewayIntentBits } = require('discord.js');
const irc = require('irc');

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

const ircClient = new irc.Client(ircConfig.server, ircConfig.botName, {
    userName: ircConfig.botName,
    realName: 'Node IRC client',
    port: 6697,
    channels: ircConfig.channels,
    secure: true,
    sasl: false,
    password: ircConfig.botPassword,
    autoconnect: true
});

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('discord-irc-bridge');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
