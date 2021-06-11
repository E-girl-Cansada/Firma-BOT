const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');

module.exports = class FirmaBotClient extends Client {

	constructor(options = {}) {
		super({

			disableMentions: 'everyone',

		});

		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.utils = new Util(this);

		this.once('ready', () => {

			console.log('FirmaBOT está online');

		});

		this.on('message', async (message) => {

			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}>`);

			if(!message.guild || message.author.bot) return;
			if(message.content.match(mentionRegex)) message.channel.send('**Caso não saiba os comandos, leia o chat #firmabot-comandos ou digite f!help**');

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			const command = this.commands.get(cmd.toLowerCase()) || this.commands.get(this.aliases.get(cmd.toLowerCase()));
			if(command) {

				command.run(message, args);

			}

		});

	}

	validate(options) {

		if(typeof options !== 'object') throw new TypeError('Opções devem ser um tipo de objeto');

		if(!options.token) throw new Error('É necessário colocar o token do client');
		this.token = options.token;

		if(!options.prefix) throw new Error('É necessário colocar o prefixo do client');
		if(typeof options.prefix !== 'string') throw new TypeError('O prefixo deve ser uma string');
		this.prefix = options.prefix;

	}

	async start(token = this.token) {

		this.utils.loadCommands();
		super.login(token);

	}
};