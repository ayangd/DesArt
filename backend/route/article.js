const express = require('express');
const createArticleController = require('../controller/article');

function createArticleRouter(article) {
    const router = express.Router();
    const articleController = createArticleController(article);
    router.post('/', articleController.create);
    router.get('/', articleController.findAll);
    router.get('/:id', articleController.find);
    router.put('/:id', articleController.update);
    router.delete('/:id', articleController.remove);
    return router;
}

module.exports = createArticleRouter;