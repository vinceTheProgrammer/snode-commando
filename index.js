// If in dev environment, load environment variables from .env file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Require node modules
const CommandoClient = require('./Database/structures/CommandoClient');
const path = require('path');
const oneLine = require('common-tags').oneLine;

// Require SequelizeProvider
const SequelizeProvider = require('./Database/providers/sequelize');

// Create the CommandoClient in place of the generic Client
const client = new CommandoClient({
	owner: '279744002599682048',
    //invite: 'https://discord.gg/5zDNffy',
    //unknownCommandResponse: false, // leave this commented; I don't think snodebot will ever need this
});

// Connect CommandoClient to Postgresql database
client.setProvider(new SequelizeProvider(client.database));

// Register command groups
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['sn', 'Stick Nodes Commands'],
    ['fun', 'Fun Commands'],
    ['mod', 'Moderator Commands'],
    ['dev', 'Developer Commands']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, './Discord/commands'));

// Create ready event
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});
    
// Useful console logs
client.on('error', console.error)
    .on('warn', console.warn)
    .on('debug', console.log)
    .on('disconnect', () => { console.warn('Disconnected!'); })
    .on('reconnecting', () => { console.warn('Reconnecting...'); })
    .on('commandError', (cmd, err) => {
    if (err instanceof commando.FriendlyError) return;
    console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
    })
    .on('commandBlocked', (msg, reason) => {
    console.log(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
    })
    .on('commandPrefixChange', (guild, prefix) => {
    console.log(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
    })
    .on('commandStatusChange', (guild, command, enabled) => {
    console.log(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
    })
    .on('groupStatusChange', (guild, group, enabled) => {
    console.log(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
  });

// log in the bot
client.login(process.env.BOT_TOKEN);