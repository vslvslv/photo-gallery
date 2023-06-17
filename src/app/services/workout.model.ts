import { Model, DataTypes } from 'sequelize';
import sequelize from './database';

class Workout extends Model {}

Workout.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    exercises: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    musclesWorked: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Workout',
  }
);

export default Workout;
