const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();


app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});











// const express = require('express');

// const app = express();

// app.use('/', require('./routes'))
// // app.use('/contacts', require('./contacts'))

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Running on port ${port}`)
// })

// const path = require('path');
// app.use('/styles', express.static(path.join(__dirname, 'styles')));
// app.use('/address', express.static(path.join(__dirname, 'styles')));
// app.use('/images', express.static(path.join(__dirname, 'images')));


