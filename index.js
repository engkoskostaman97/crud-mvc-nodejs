const express = require('express');
const app = express();
const port = 8000;
const apiRouter = require ('./api-routes');

app.get('/', (req, res) => {

    res.send('hello world');
})

app.use ("/api", apiRouter);


app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
})