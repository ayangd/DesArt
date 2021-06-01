const express = require('express');
const createLoginController = require('../controller/login');
const createArticleRouter = require('./article');
const createContactUsRouter = require('./contactus');
const createLoginRouter = require('./login');

function createAPIRouter(models) {
    const masterRouter = express.Router();
    const loginController = createLoginController();
    masterRouter.use('/api/auth', createLoginRouter(loginController));
    masterRouter.use('/api/article', createArticleRouter(models.Article, loginController.passUser));
    masterRouter.use('/api/contactus', createContactUsRouter(models.ContactUs, loginController.passUser));

    return masterRouter;
}

module.exports = createAPIRouter;