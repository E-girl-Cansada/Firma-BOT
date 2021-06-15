module.exports = {
	name: 'coinflip',
	aliases: ['coin', 'caracoroa'],
	category: 'Aleatórios',
	description: 'Faz um cara ou coroa',
	callback: ({
		message,

	}) => {

		const respostas = ['**🧑 Cara**', '**👵 Coroa**'];
		const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

		message.channel.send(`${resposta}`);

	},

};