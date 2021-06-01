function createArticleModel(Sequelize, sequelize) {
    const Article = sequelize.define('article', {
        title: Sequelize.STRING,
        content: Sequelize.TEXT,
        author: Sequelize.STRING,
    });
    return Article;
}

module.exports = createArticleModel;