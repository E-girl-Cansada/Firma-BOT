const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale('pt-br');

module.exports = {
	name: 'serverinfo',
	aliases: ['server', 'serveri', 'guildi', 'guildinfo', 'guild'],
	category: 'Informações',
	description: 'Mostra algumas informações do server',
	callback: ({
		message,

	}) => {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()
			.setDescription(`**Informação do __${message.guild.name}__**`)
			.setColor('WHITE')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('Geral', [

				`**❯ Dono:** ${message.guild.owner.user.tag}`,
				`**❯ Tier de Boosts:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'Nenhum'}`,
				`**❯ Data de Criação:** ${moment(message.guild.createdTimestamp).format('LT')} | ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b',

			])
			.addField('Estatísticas', [

				`**❯ Quantidade de Cargos:** ${roles.length}`,
				`**❯ Quantidade de Emojis:** ${emojis.size}`,
				`**❯ Quantidade de Membros:** ${message.guild.memberCount}`,
				`**❯ Quantidade de Boosts:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b',

			])
			.addField(`Cargos [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'Nenhum')
			.setTimestamp();

		message.channel.send(embed);

	},

};