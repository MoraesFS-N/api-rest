const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3333, () => console.log("Server is running at port 3333"));

app.get('/', (req, res) => res.send('Hello World!'));
