const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})