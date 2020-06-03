const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const apiMob = require('./lib/api');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

app.get('/', async (req, res) => { // localhost:3000/ home page
    res.render('index');
});

app.post('/', function(req, res) {
    console.log(req.files.foo); // the uploaded file object
    res.render('pictures'); 
  });


app.get('/pictures', async (req, res) => { // localhost:3000/ home page
    res.render('pictures');
});











app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})