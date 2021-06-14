const Command = require('../../Structures/Command.js');

module.exports = class extends Command {

	constructor(...args) {

		super(...args, {

			aliases: ['champ'],
			description: ['Envia algum campeão aleatório do LoL'],
			usage: ['f!campeao'],
			category: ['Aleatórios'],

		});
	}

	async run(message) {

		const respostas = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bardo', 'Blitzcrank', 'Brand', 'Bruum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho\'Gath', 'Corki', 'Darius', 'Diana', '<:Gigachad:832449062409994241> Dr. Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Grongos', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai\'Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha\'Zix', 'Kindred', 'Kled', 'Pog\'Maw', 'Leblanc', 'Lee Sinner', 'Leona', 'Bambi lol', 'Lissandra', 'Lucian', '<:AYAYA:705272810792026124> Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Namizinha', '<:YEP:751609486103281764> Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu e Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qyiana', 'Quinn', 'Rakan', 'Rammus', 'Rek\'Sai', 'Rell', '<:pepeNekton:842116844738576434> Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryzen', 'Samira', 'Seijuani', 'Senna', 'Seraphine', 'Sett', '🤡 Shaco', 'Shen', 'Shyvana', 'SINGED RAIZ HYPE', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Sorakinha', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitter', '🐻 Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel\'Koz', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', '🐒 Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasou', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Ziggs', 'O HOMI', 'I hope Zoe wins xD', 'Zyra'];
		const resposta = respostas[Math.floor(Math.random() * (respostas.length))];

		message.channel.send(`**${resposta}**`);

	}

};