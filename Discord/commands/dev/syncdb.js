const { Command } = require('discord.js-commando');
const dbInit = require('../../../Database/dbInit');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'syncdb',
			group: 'dev',
			memberName: 'syncdb',
            description: 'Syncs the defined Sequelize database models.',
            throttling: {
                usages: 2,
                duration: 10,
            },
            guildOnly: false,
            ownerOnly: true,
            args: [
                {
                    key: 'args', // the name of the argument. When you define it in your run method, this is what you'll be using.
                    prompt: 'Are there any arguments you want to pass?', // the text that displays if no argument is provided. If someone uses just ?say, that prompt will come up asking for the text.
                    type: 'string', // the type the argument is a part of. This can be many things, including string, integer, user, member, etc.
                    default: '',
                },
            ],
		});
	}

	run(message, { args }) {
        dbInit.init(this.client.database);
		return message.say("Database models synced."); // use "this." when using client values
	}
};
