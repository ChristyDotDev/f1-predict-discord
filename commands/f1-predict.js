const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('f1-predict')
		.setDescription('Kicks off the prediction thread for the current F1 event')
};