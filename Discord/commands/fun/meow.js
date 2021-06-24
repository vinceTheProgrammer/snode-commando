const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'meow',
            group: 'fun',
            aliases: ['kitty-cat'],
			memberName: 'meow',
			description: 'Replies with a meow, kitty cat.',
		});
    }
    
    run(message) {
        return message.say('Meow!');
    }
};