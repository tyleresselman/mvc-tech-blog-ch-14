// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Post extends Model {}

// Post.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }, 
//     contents: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     date_created: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW
//     } ,
//     userId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id'
//       }
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'post',
//   }
// );

// module.exports = Post;

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = Post;