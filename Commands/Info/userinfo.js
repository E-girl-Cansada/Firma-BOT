const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale('pt-br');

module.exports = {
	name: 'userinfo',
	aliases: ['uinfo', 'user'],
	category: 'Informações',
	description: 'Mostra algumas Informações de alguém',
	callback: ({
		message,

	}) => {

		const member = message.mentions.members.first() || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);

		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor('WHITE')
			.addField('Informações Gerais', [

				`**❯ Nome:** ${member.user.username}#${member.user.discriminator}`,
				`**❯ ID:** ${member.id}`,
				`**❯ Avatar:** [avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**❯ Conta criada em:** ${moment(member.user.createdTimestamp).format('LT')} | ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**❯ Status:** ${member.user.presence.status}`,
				`**❯ Jogando:** ${member.user.presence.game || 'Nada.'}`,
				'\u200b',

			])
			.addField('Relacionado ao Server', [

				`**❯ Cargo mais alto:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
				`**❯ Entrou no server em:** ${moment(member.joinedAt).format('LL LTS')}`,
				`**❯ Cargos [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
				'\u200b',

			]);

		message.channel.send(embed);

	},

};