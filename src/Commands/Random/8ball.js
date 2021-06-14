const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['ask', 'pergunta'],
			description: ['Responde uma pergunta (Sim/Não)'],
			usage: ['f!8ball <pergunta>'],
			category: ['Aleatórios'],

		});
	}

	async run(message) {

		const question = message.content.slice('f!'.length).trim().split(/ +/);
		if(!question[1]) {

			message.channel.send('⚠️ **| Por favor, coloque sua pergunta**');

		}
		else {

			const respostas = ['**Sim**', '**Não**', '**Com certeza**', '**Sem dúvidas**', '**Óbvio que não**', '**Jamais**', '🤔 **Vou dar uma pensada, tente novamente**'];
			const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

			message.channel.send(`${resposta}`);

		}

	}

};