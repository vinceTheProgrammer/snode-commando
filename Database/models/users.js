module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
        sn_username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sn_link_key: {
            type: DataTypes.STRING(16),
            allowNull: true,
        },
		balance: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
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