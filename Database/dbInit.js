const Sequelize = require('sequelize');

/*
const { DATABASE, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT } = process.env;

const database = new Sequelize({
  database: DATABASE,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
});
*/

module.exports = {
    init(database, args) {
        require("./models/users")(database, Sequelize.DataTypes);
        require("./models/servers")(database, Sequelize.DataTypes);
        require("./models/reviews")(database, Sequelize.DataTypes);

        const force = args.includes('--force') || args.includes('-f');

        database.sync({ force }).then(async () => {
            console.log('Database synced');
            database.close();
        }).catch(console.error);
    }
}