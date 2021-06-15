module.exports = {
	name: 'dado',
	category: 'Aleatórios',
	description: 'Envia um número aleatório entre 1-6 ou um valor predefinido',
	callback: ({
		message,
		args,

	}) => {

		// I made this with copy pasta, so it's not really optimized and I'm too lazy to fix
		if(!args[0] && !args[1]) {

			const randNum = Math.floor(Math.random() * (6 - 1) + 1);
			message.channel.send(`🎲 **| Resultado: ${randNum}**`);

		}
		else if(args[0] && !args[1]) {

			const randNum = Math.floor(Math.random() * args[0]);
			message.channel.send(`🎲 **| Resultado: ${randNum}**`);

		}
		else if((args[0] && args[1]) && (args[0] > args[1])) {

			// javascript is garbage and so i am
			let randNum = Math.random() * (args[0] - args[1]);
			randNum = randNum + args[1];
			message.channel.send(`🎲 **| Resultado: ${Math.floor(randNum)}**`);

		}
		else if((args[0] && args[1]) && (args[0] < args[1])) {

			// javascript is garbage and so i am
			let randNum = Math.random() * (args[1] - args[0]);
			randNum = Number(randNum) + Number(args[0]);
			message.channel.send(`🎲 **| Resultado: ${Math.floor(randNum)}**`);

		}
		else if((args[0] && args[1]) && (args[0] === args[1])) {

			message.channel.send('⚠️ **| Por favor, coloque dois números diferentes**');

		}

	},

};