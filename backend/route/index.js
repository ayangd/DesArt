const express = require('express');
const createArticleRouter = require('./article');
const createContactUsRouter = require('./contactus');

function createAPIRouter(models) {
    const masterRouter = express.Router();
    masterRouter.use('/api/article', createArticleRouter(models.Article));
    masterRouter.use('/api/contactus', createContactUsRouter(models.ContactUs));

    return masterRouter;
}

module.exports = createAPIRouter;