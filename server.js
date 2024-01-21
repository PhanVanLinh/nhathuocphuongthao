var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/home', {title: "Quầy thuốc Phương Thảo", zalo: "0036123456"});
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

//
app.get('/chinh-sach-bao-mat', function(req, res) {
  res.render('pages/privacy-policy', {title: "Quầy thuốc Phương Thảo", zalo: "0036123456"});
});

app.get('/captcha', function(req, res) {
  res.render('pages/captcha');
});

app.get('/recaptcha_enterprise', function(req, res) {
  res.render('pages/recaptcha_enterprise');      
});        

app.listen(4000);
console.log('Server is listening on port 4000');
