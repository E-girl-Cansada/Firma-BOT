const Command = require('../../Structures/Command.js');
const firmaDB = require('quick.db');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['tilt'],
			description: ['Mostra a quantidade de vezes que alguém tiltou'],
			usage: ['f!tiltou <pessoa>'],
			category: ['Contadores'],

		});
	}

	async run(message) {

		const userTiltado = message.mentions.users.first();

		if(!userTiltado) {

			message.channel.send('⚠️ **| Por favor, mencione quem está tiltado**');

		}
		else {

			let quantTilt = firmaDB.get(`contadores.${userTiltado}.tilt`);

			if(quantTilt == undefined) {

				firmaDB.set(`contadores.${userTiltado}.tilt`, 0);
				quantTilt = 0;

			}

			firmaDB.set(`contadores.${userTiltado}.tilt`, (quantTilt + 1));

			const respostas = ['está til ta da?', 'está vomitando ódio', 'está de TPM'];
			const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

			message.channel.send(`<:Tiltas:705573827161227612> **| ${userTiltado} ${resposta}, tiltadas totais: ${firmaDB.get(`contadores.${userTiltado}.tilt`)}**`);

		}

	}

};