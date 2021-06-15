module.exports = {
	name: 'uptime',
	aliases: ['u', 'upt', 'up'],
	category: 'Informações',
	description: 'Mostra o uptime do bot',
	callback: ({
		message,

	}) => {

		const days = Math.floor(this.client.uptime / 86400000);
		const hours = Math.floor(this.client.uptime / 3600000) % 24;
		const minutes = Math.floor(this.client.uptime / 60000) % 60;
		const seconds = Math.floor(this.client.uptime / 1000) % 60;

		message.channel.send(`:clock1: **| Firma Bot está online há ${days}d:${hours}h:${minutes}m:${seconds}s**`);

	},

};