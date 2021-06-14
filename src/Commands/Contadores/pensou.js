const Command = require('../../Structures/Command.js');
const firmaDB = require('quick.db');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['pensando'],
			description: ['Mostra a quantidade de vezes que alguém deu aquela pensada'],
			usage: ['f!pensando <pessoa>'],
			category: ['Contadores'],

		});
	}

	async run(message) {

		const userPensando = message.mentions.users.first();

		if(!userPensando) {

			message.channel.send('⚠️ **| Por favor, mencione quem está pensando**');

		}
		else {

			let quantPensou = firmaDB.get(`contadores.${userPensando}.pensamento`);

			if(quantPensou == undefined) {

				firmaDB.set(`contadores.${userPensando}.pensamento`, 0);
				quantPensou = 0;

			}

			firmaDB.set(`contadores.${userPensando}.pensamento`, (quantPensou + 1));

			const respostas = ['está chegando na conclusão do porque o eclipse é bom', 'está pensando profundamente', 'não nos conte porque o eclipse é bom, por favor 😭'];
			const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

			message.channel.send(`🤔 **| ${userPensando} ${resposta}, pensadas totais: ${firmaDB.get(`contadores.${userPensando}.pensamento`)}**`);

		}

	}

};