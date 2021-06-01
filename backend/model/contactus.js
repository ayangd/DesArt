function createContactUsModel(Sequelize, sequelize) {
    const ContactUs = sequelize.define('contactus', {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        message: Sequelize.TEXT,
    });
    return ContactUs;
}

module.exports = createContactUsModel;