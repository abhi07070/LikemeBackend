const express = require('express');
const app = express();
const routes = require('./routes');
const port = 8000;

//use express router
app.use('/', routes);

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})