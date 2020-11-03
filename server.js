const express = require('express');
const multer = require('multer');
const proccess = require('./proccess.js');
var upload = multer({ dest: 'uploads/' });
let app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/csvfy', upload.single('json'), (req, res) => {
  console.log(req.body.json);
  proccess(req.body.json, data => res.json(data)); 
});

let port = 3001;

app.listen(port, () => {
  console.log('Listening on ' + port);
});