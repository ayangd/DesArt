const express = require('express');

function createLoginRouter(loginController) {
    const router = express.Router();
    router.post('/login', loginController.login);
    router.post('/logout', loginController.logout);
    router.get('/checkUser', loginController.checkUser);
    return router;
}

module.exports = createLoginRouter;