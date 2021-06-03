const { Article } = require("../model");

function createContactUsController(contactus) {
    function create(req, res) {
        const {name, email, message} = req.body;
        const hasAllFields =
            name !== undefined &&
            email !== undefined &&
            message !== undefined;
        if (!hasAllFields) {
            return res.status(400).send({
                success: false,
                message: "Fields must be complete",
            });
        }

        contactus.create({name, email, message})
            .then(contactus => {
                res.send({
                    success: true,
                    data: contactus,
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
        contactus.findAll({
            order: ['createdAt'],
        }).then(data => {
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

    function find(req, res) {
        const id = req.params.id;
        if (id === undefined) {
            return res.send(400).send({
                success: false,
                message: "Id must be included.",
            });
        }

        contactus.findByPk(id)
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

    function remove(req, res) {
        const id = req.params.id;

        contactus.destroy({
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
        remove,
    }
}

module.exports = createContactUsController;