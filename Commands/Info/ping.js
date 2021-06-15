module.exports = {
	name: 'ping',
	aliases: ['ms', 'pong'],
	category: 'Informações',
	description: 'Mostra o ping do bot',
	callback: ({
		message,
		client,
	}) => {

		message.channel.send(`${client.ws.ping}ms`);

	},

};
