// import fs from 'fs';

var form = (e) => {
  e.preventDefault();
  // console.log($('#jsonFile').val());
  // fs.readFile($('#jsonFile').val(), 'utf8', (data) => {
  //   console.log(data);
  // });
  $.ajax({
    url: 'http://127.0.0.1:3001/csvfy',
    method: 'POST',
    contentType: 'application/json',
    data: $('#json').val(),
    success: (csv) => { console.log('data: ', csv); $('#results').html(`<pre>${csv}</pre>`); },
    error: (err) => console.log('err: ', err)
  });
};
    
$('form').on('submit', (e) => { form(e); });