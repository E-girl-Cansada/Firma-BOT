const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(... args) {

		super(... args, {

			aliases: ['up'],
			description: ['Mostra o tempo que o bot está online'],
			usage: ['f!uptime'],
			category: ['Informação'],

		});

	}

	async run(message) {

		const days = Math.floor(this.client.uptime / 86400000);
		const hours = Math.floor(this.client.uptime / 3600000) % 24;
		const minutes = Math.floor(this.client.uptime / 60000) % 60;
		const seconds = Math.floor(this.client.uptime / 1000) % 60;

		message.channel.send(`⏲️ **| FirmaBOT está online há: ${days}d:${hours}h:${minutes}m:${seconds}s**`);

	}

};