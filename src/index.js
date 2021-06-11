const FirmaBotClient = require('./Structures/FirmaBotClient');
const config = require('../config.json');

const client = new FirmaBotClient(config);
client.start();