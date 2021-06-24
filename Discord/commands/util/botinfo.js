const { Command } = require('discord.js-commando');
const myPackage = require('../../../package.json');

module.exports = class MeowCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'botinfo',
			group: 'util',
            aliases: ['bot-info'],
			memberName: 'botinfo',
            description: 'Replies with information about me.',
            guildOnly: false,
		});
	}

	run(message) {

		const botinfo = {
			color: 0x0099ff,
			title: 'Bot Info',
			author: {
				name: message.member.user.tag,
				icon_url: message.member.user.avatarURL(),
			},
			description: 'Information about me.',
			thumbnail: {
				url: 'https://cdn.discordapp.com/attachments/790351066607648828/857479755497865216/info.png',
			},
			fields: [
				{
					name: 'Bot Name',
					value: myPackage.name,
				},
				{
					name: 'Version',
					value: myPackage.version,
				},
				{
					name: 'Description',
					value: myPackage.description,
				},
				{
					name: 'Keywords',
					value: "`" + myPackage.keywords.join("` `") + '`',
				},
				{
					name: 'Source Code',
					value: `Source code can be found [here](${myPackage.repository.url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm)[0]}).`,
				},
			],
			timestamp: new Date(),
		};


		return message.embed(botinfo); // use "this." when using client values
	}
};
