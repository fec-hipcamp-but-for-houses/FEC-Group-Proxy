const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3005;
const publicDir = path.join(__dirname, './client/public/');

app.use(express.static(publicDir));

app.listen(port, () => console.log('Listening on Port:', port));