const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(... args) {

		super(... args, {

			aliases: ['pong'],
			description: ['Mostra o ping do bot'],
			usage: ['f!ping'],
			category: ['Informação'],


		});

	}

	async run(message) {

		const pingCalc = await message.channel.send('⏳ **| Calculando...**');

		pingCalc.edit(`⌛ **| Ping: ${pingCalc.createdTimestamp - message.createdTimestamp}ms**`);

	}

};