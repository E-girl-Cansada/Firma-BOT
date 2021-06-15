const firmaDB = require('quick.db');

module.exports = {
	name: 'renekton',
	aliases: ['renek', 'jacas'],
	category: 'Contadores',
	description: 'Mostra a quantidade de vezes que Renekton foi forte',
	callback: ({
		message,

	}) => {

		let quantRenektons = firmaDB.get('contadores.renekton');
		if(quantRenektons == null) {

			firmaDB.set('contadores.renekton', 0);
			quantRenektons = 0;

		}

		firmaDB.set('contadores.renekton', (quantRenektons + 1));

		const respostas = ['Uma lagartixa acaba de aparecer, quantidade total de lagartixas', 'É o jacarés? Quantidade de vezes que renekton foi forte', 'A wild renekton appears... renektons totais'];
		const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

		message.channel.send(`<:pepeNekton:842116844738576434> **| ${resposta}: ${firmaDB.get('contadores.renekton')}**`);

	},

};