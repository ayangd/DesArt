const express = require('express');
const createArticleRouter = require('./article');

function createAPIRouter(models) {
    const masterRouter = express.Router();
    masterRouter.use('/api/article', createArticleRouter(models.Article));

    return masterRouter;
}

module.exports = createAPIRouter;