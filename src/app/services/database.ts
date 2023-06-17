import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'fitness-db',
  username: 'admin',
  password: 'Test123!',
  host: 'localhost',
  port: 5432, // Replace with your PostgreSQL port if different
  dialect: 'postgres',
});

export default sequelize;
