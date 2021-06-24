const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'say',
			aliases: ['parrot', 'copy'],
			group: 'mod',
			memberName: 'say',
            description: 'Replies with the text you provide.',
            userPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string',
                },
            ],
		});
	}

	run(message, { text }) {
		return message.reply(text);
	}
};
