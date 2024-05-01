const express = require('express');

const app = express();

app.use('/', require('./routes'))
// app.use('/contacts', require('./contacts'))


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})






























app.set('view engine', 'ejs');
const path = require('path');
// app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/address', express.static(path.join(__dirname, 'styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));