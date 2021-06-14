const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	async run(message) {

		if(message.author.id === '158280811139825665') {

			const sayAnnMessage = message.content.slice(16);
			this.client.guilds.cache.get('583059416291737650').channels.cache.get('852367609869762600').send(sayAnnMessage);

		}
		else {

			message.channel.send('🚫 **| Você não tem permissão para usar este comando**');

		}

	}

};