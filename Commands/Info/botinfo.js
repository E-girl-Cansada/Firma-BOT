const { MessageEmbed } = require('discord.js');
const { version } = require('../../package.json');

module.exports = {
	name: 'botinfo',
	aliases: ['bot', 'version', 'binfo'],
	category: 'Informações',
	description: 'Mostra algumas informações do bot',
	callback: ({
		message,
		client,
	}) => {

		const embed = new MessageEmbed()
			.setThumbnail(client.user.displayAvatarURL())
			.setColor('WHITE')
			.addField('Geral', [

				`**❯ Usuário:** ${client.user.tag}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Versão:** v${version}`,
				'\u200b',

			])
			.setTimestamp();

		message.channel.send(embed);

	},

};
