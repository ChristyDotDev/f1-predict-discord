const { Client, GatewayIntentBits, GuildChannel, TextChannel } = require('discord.js');
const config = require('dotenv').config()

const token = `${process.env.DISCORD_TOKEN}`;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'f1-predict') {
		console.log(interaction)
		console.log(interaction?.member?.guild?.id)
		console.log(interaction?.member?.guild?.name)
		console.log(Date.now());

		const channel = client.channels.cache.get(interaction.channelId);
		const thread = await channel.threads.create({
			name: 'f1-event-' + Date.now().toString(),
			autoArchiveDuration: 60,
			reason: 'A prediction thread for some f1 event',
		});

		await interaction.reply("Howdy. It's a predict thread");
    }
});