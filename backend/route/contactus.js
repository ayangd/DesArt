const express = require('express');
const createContactUsController = require('../controller/contactus');

function createContactUsRouter(article, passUser) {
    const router = express.Router();
    const contactUsController = createContactUsController(article);
    router.post('/', contactUsController.create);
    router.get('/', passUser, contactUsController.findAll);
    router.get('/:id', passUser, contactUsController.find);
    router.delete('/:id', passUser, contactUsController.remove);
    return router;
}

module.exports = createContactUsRouter;