const express = require('express'),
    app = express();

var armureRoute = require('./routes/armure'),
    brasRoute = require('./routes/bras'),
    capeRoute = require('./routes/cape'),
    casqueRoute = require('./routes/casque'),
    jambeRoute = require('./routes/jambe'),
    torseRoute = require('./routes/torse');

app.use(express.json());
app.use('/armure', armureRoute);
app.use('/bras', brasRoute);
app.use('/cape', capeRoute);
app.use('/casque', casqueRoute);
app.use('/jambe', jambeRoute);
app.use('/torse', torseRoute);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});