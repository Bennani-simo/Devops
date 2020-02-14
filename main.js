const express = require('express'),
    app = express();
    bodyParser = require('body-parser');

var armureRoute = require('./routes/armure');

app.use(express.json());
app.use('/armure', armureRoute);


app.listen(3000, function () {
  console.log('App listening on port 3000!')
});