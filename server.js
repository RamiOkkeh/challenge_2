const express = require('express');

let app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/csvfy', (req, res) => {
    
});

let port = 3001;

app.listen(port, () => {
  console.log('Listening on ' + port);
});