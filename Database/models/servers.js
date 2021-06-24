module.exports = (sequelize, DataTypes) => {
	return sequelize.define('servers', {
		server_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
        owner_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        invite_link: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
		stats: {
			type: DataTypes.JSONB,
			defaultValue: '{}',
			allowNull: false,
		},
        settings: {
            type: DataTypes.JSONB,
            defaultValue: '{}',
            allowNull: false,
        },
        data: {
            type: DataTypes.JSONB,
            defaultValue: '{}',
            allowNull: false,
        },
	}, {
		timestamps: true,
	});
};