const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['caraoucoroa'],
			description: ['Envia cara ou coroa'],
			usage: ['f!coinflip'],
			category: ['Aleatórios'],

		});
	}

	async run(message) {

		const respostas = ['**🧑 Cara**', '**👵 Coroa**'];
		const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

		message.channel.send(`${resposta}`);

	}

};