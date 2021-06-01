const Sequelize = require('sequelize');
const createArticleModel = require('./article');
const createContactUsModel = require('./contactus');

const sequelize = new Sequelize('sqlite:../database/database.sqlite');
const Article = createArticleModel(Sequelize, sequelize);
const ContactUs = createContactUsModel(Sequelize, sequelize);

module.exports = {
    sequelize,
    Article,
    ContactUs,
}