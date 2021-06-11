function createArticleController(article) {
    function create(req, res) {
        const {title, author, content} = req.body;
        const hasAllFields =
            title !== undefined &&
            author !== undefined &&
            content !== undefined;
        if (!hasAllFields) {
            return res.status(400).send({
                success: false,
                message: "Fields must be complete",
            });
        }
    
        article.create({title, author, content})
            .then(article => {
                res.send({
                    success: true,
                    data: article,
                });
            })
            .catch(err => {
                res.status(500).send({
                    success: false,
                    message: err.message,
                });
            });
    }

    function findAll(req, res) {
        article.findAll({
            order: ['createdAt'],
        }).then(data => {
            res.send({
                success: true,
                data: data,
            });
        }).catch(err => {
            res.status(500)
                .send({
                    success: false,
                    message: err.message,
                });
        });
    }

    function find(req, res) {
        const id = req.params.id;
        if (id === undefined) {
            return res.send(400).send({
                success: false,
                message: "Id must be included.",
            });
        }

        article.findByPk(id)
            .then(data => {
                res.send({
                    success: true,
                    data: data,
                });
            }).catch(err => {
                res.status(500).send({
                    success: false,
                    message: err.message,
                });
            });
    }

    function update(req, res) {
        const id = req.params.id;
        if (id === undefined) {
            return res.send(400).send({
                success: false,
                message: "Id must be included.",
            });
        }

        const {title, author, content} = req.body;
        article.update({title, author, content}, {
            where: { id },
        }).then(num => {
            if (num[0] === 1) {
                return res.send({
                    success: true,
                });
            }
            return res.send({
                success: false,
                message: 'Row updated is not 1',
            });
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message,
            });
        });
    }

    function remove(req, res) {
        const id = req.params.id;

        article.destroy({
            where: { id },
        }).then(num => {
            if (num === 1) {
                return res.send({
                    success: true,
                });
            }
            return res.send({
                success: false,
                message: 'Row updated is not 1',
            });
        }).catch(err => {
            res.status(500).send({
                success: false,
                message: err.message,
            });
        });
    }

    return {
        create,
        findAll,
        find,
        update,
        remove,
    }
}

module.exports = createArticleController;