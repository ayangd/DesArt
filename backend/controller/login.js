function createLoginController() {
    function login(req, res) {
        const {username, password} = req.body;
        const hasAllFields =
            username !== undefined &&
            password !== undefined;
        if (!hasAllFields) {
            return res.status(400).send({
                success: false,
                message: 'Bad request',
            });
        }

        if (username === '@dmin13579' && password === 'Adm|n12345') {
            req.session.user = 'admin';
            return res.send({ success: true });
        }
        return res.send({
            success: false,
            message: 'Wrong username or password',
        });
    }

    function logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: err.message,
                });
            }
            console.log("Session destroyed.");
            return res.send({ success: true });
        });
    }

    function checkUser(req, res) {
        res.send({
            success: true,
            data: req.session.user === 'admin',
        });
    }

    function passUser(req, res, next) {
        if (req.session.user === 'admin') {
            return next();
        }
        res.status(401).send({
            success: false,
            message: 'Unauthorized access',
        });
    }

    return {
        login,
        logout,
        checkUser,
        passUser,
    }
}

module.exports = createLoginController;