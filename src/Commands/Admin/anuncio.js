const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	async run(message) {

		if(message.author.id === '') {

			const sayAnnMessage = message.content.slice(16);
			this.client.guilds.cache.get('').channels.cache.get('').send(sayAnnMessage);

		}
		else {

			message.channel.send('🚫 **| Você não tem permissão para usar este comando**');

		}

	}

};
