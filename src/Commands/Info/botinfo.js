const { MessageEmbed } = require('discord.js');
const { version } = require('../../../package.json');
const Command = require('../../Structures/Command');
const os = require('os');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['binfo', 'bot', 'version'],
			description: ['Mostra as informações do bot'],
			usage: ['f!botinfo'],
			category: ['Informação'],

		});

	}

	async run(message) {

		const core = os.cpus()[0];

		const embed = new MessageEmbed()
			.setThumbnail(this.client.user.displayAvatarURL())
			.setColor('WHITE')
			.addField('Geral', [

				`**❯ Usuário:** ${this.client.user.tag}`,
				`**❯ Comandos:** ${this.client.commands.size}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Versão:** v${version}`,
				'\u200b',

			])
			.addField('Sistema', [

				`**❯ Plataforma:** ${process.platform}`,
				'**❯ CPU:**',
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Modelo: ${core.model}`,
				`\u3000 Velocidade: ${core.speed}MHz`,
				'**❯ Memória:**',
				`\u3000 Total: ${this.client.utils.formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 Usado: ${this.client.utils.formatBytes(process.memoryUsage().heapUsed)}`,

			])
			.setTimestamp();

		message.channel.send(embed);
	}

};