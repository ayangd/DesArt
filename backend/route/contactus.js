const express = require('express');
const createContactUsController = require('../controller/contactus');

function createContactUsRouter(article) {
    const router = express.Router();
    const contactUsController = createContactUsController(article);
    router.post('/', contactUsController.create);
    router.get('/', contactUsController.findAll);
    router.get('/:id', contactUsController.find);
    router.delete('/:id', contactUsController.remove);
    return router;
}

module.exports = createContactUsRouter;