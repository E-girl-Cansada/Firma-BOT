const Discord = require('discord.js');
const cmdHandler = require('wokcommands');
const { version } = require('./package.json');
// const keepAlive = require('./server');

const client = new Discord.Client();

client.on('ready', () => {

	console.log('FirmaBot está online');
	client.user.setActivity('Discord da Firma', { type: 'WATCHING' });
	client.user.setUsername(`FirmaDev (v${version})`);

	new cmdHandler(client, {

		commandsDir: 'Commands',
		featuresDir: 'Events',
		showWarns: false,
		ignoreBots: true,

	})
		.setDefaultPrefix('ft!');

});

client.login('');
