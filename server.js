const express = require('express');
const fs = require('fs');
// const multer = require('multer');
const proccess = require('./proccess.js');
let app = express();


// const storage = multer.diskStorage({
//   destination: './',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + 
//         path.extname(file.originalname));
//   }
// });

// var upload = multer({ storage: storage }).single('json');

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/csvfy', (req, res) => {
  proccess(req.body, data => { res.status(201); res.send(data); }); 
});

let port = 3001;

app.listen(port, () => {
  console.log('Listening on ' + port);
});