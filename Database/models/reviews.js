module.exports = (sequelize, DataTypes) => {
	return sequelize.define('reviews', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
            autoIncrement: true,
		},
        server_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
		content: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	}, {
		timestamps: true,
	});
};