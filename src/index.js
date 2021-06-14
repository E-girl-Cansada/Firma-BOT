const FirmaBotClient = require('./Structures/FirmaBotClient');
const config = require('../config.json');
const { version } = require('../package.json');

const client = new FirmaBotClient(config);
client.start();

client.once('ready', () => {

	client.user.setActivity('src/index.js', { type: 'WATCHING' });
	client.user.setUsername(`FirmaDev (v${version})`);

});