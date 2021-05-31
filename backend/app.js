const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const models = require('./model');
const createAPIRouter = require('./route');

const app = express();
models.sequelize.sync().then(() => {
    console.log('DB sync done.');
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(session({
    secret: 'You like jazz?',
    resave: false,
    saveUninitialized: false,
}));

app.use(createAPIRouter(models));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})