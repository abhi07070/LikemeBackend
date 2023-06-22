const express = require('express');
const app = express();
const routes = require('./routes');
const port = 8000;

//use express router
app.use('/', routes);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views')

app.listen(port, () => {
    console.log(`listening at port ${port}`);
})