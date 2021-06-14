const Command = require('../../Structures/Command.js');
const firmaDB = require('quick.db');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['renek'],
			description: ['Mostra a quantidade de vezes que Renekton foi forte (afundou solo)'],
			usage: ['f!renekton'],
			category: ['Contadores'],

		});
	}

	async run(message) {

		let quantRenektons = firmaDB.get('contadores.renekton');
		if(quantRenektons == null) {

			firmaDB.set('contadores.renekton', 0);
			quantRenektons = 0;

		}

		firmaDB.set('contadores.renekton', (quantRenektons + 1));

		const respostas = ['Uma lagartixa acaba de aparecer, quantidade total de lagartixas', 'É o jacarés? Quantidade de vezes que renekton foi forte', 'A wild renekton appears... renektons totais'];
		const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

		message.channel.send(`<:pepeNekton:842116844738576434> **| ${resposta}: ${firmaDB.get('contadores.renekton')}**`);

	}

};