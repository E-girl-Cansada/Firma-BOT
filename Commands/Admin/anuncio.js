module.exports = {
	name: 'anuncio',
	category: 'Admin',
	description: 'Envia uma mensagem para o canal de anuncios',
	callback: ({
		message,
		client,

	}) => {

		if(message.author.id === '158280811139825665') {

			const sayAnnMessage = message.content.slice(10);
			client.guilds.cache.get('583059416291737650').channels.cache.get('852367609869762600').send(sayAnnMessage);

		}
		else {

			message.channel.send('🚫 **| Você não tem permissão para usar este comando**');

		}

	},

};