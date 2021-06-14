module.exports = class Command {

	constructor(client, name, options = {}) {

		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || [];
		this.description = options.description || 'Não existe nenhuma descrição';
		this.category = options.category || 'Aleatórios';
		this.usage = options.usage || 'Não existe nenhuma forma de uso';

	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {

		throw new Error(`O comando ${this.name} não providencia um método para execução`);

	}

};
