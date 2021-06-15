module.exports = {
	name: '8ball',
	category: 'Aleatórios',
	description: 'Responde uma pergunta com (Sim/Não)',
	callback: ({
		message,

	}) => {

		const randomNum = Math.floor(Math.random() * 5);
		const question = message.content.slice('f!'.length).trim().split(/ +/);
		const respostas = ['**Sim**', '**Não**', '**Com certeza**', '**Sem dúvidas**', '**Óbvio que não**', '**Jamais**'];

		if(!question[1]) {

			message.channel.send('⚠️ **| Por favor, coloque sua pergunta**');

		}
		else {

			message.channel.send(`${respostas[randomNum]}`);

		}

	},

};

