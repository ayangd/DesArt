const Sequelize = require('sequelize');
const createArticleModel = require('./article');

const sequelize = new Sequelize('sqlite:../database/database.sqlite');
const Article = createArticleModel(sequelize);

module.exports = {
    sequelize,
    Article,
}