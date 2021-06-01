const express = require('express');
const createArticleController = require('../controller/article');

function createArticleRouter(article, passUser) {
    const router = express.Router();
    const articleController = createArticleController(article);
    router.post('/', passUser, articleController.create);
    router.get('/', articleController.findAll);
    router.get('/:id', articleController.find);
    router.put('/:id', passUser, articleController.update);
    router.delete('/:id', passUser, articleController.remove);
    return router;
}

module.exports = createArticleRouter;