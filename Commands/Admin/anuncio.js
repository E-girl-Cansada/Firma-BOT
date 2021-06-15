module.exports = {
	name: 'anuncio',
	category: 'Admin',
	description: 'Envia uma mensagem para o canal de anuncios',
	callback: ({
		message,
		client,

	}) => {

		if(message.author.id === '') {

			const sayAnnMessage = message.content.slice(10);
			client.guilds.cache.get('').channels.cache.get('').send(sayAnnMessage);

		}
		else {

			message.channel.send('🚫 **| Você não tem permissão para usar este comando**');

		}

	},

};