const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const apiMob = require('./lib/api');
const fileUpload = require('express-fileupload');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');

app.get('/', async (req, res) => { // localhost:3000/ home page
    res.render('index');
});

app.get('/pictures', async (req, res) => { // localhost:3000/ home page
    res.render('pictures')
    res.sendFile(__dirname + '/pictures.hbs');
});

app.post('/pictures', (req, res) => {
    // var img = req.body.picture;
    let img = req.body.picture;
    console.log(img);

    // img.mv(__dirname + `./public/img/${img}`, function(err) {
    //     if (err)
    //         return res.status(500).send(err);
    //     res.send('File uploaded!');
    // });

    res.render('pictures', {img});
});





app.listen(3000,() => { // localhost:3000 but can be any port between 3000-8000 i think
    console.log("listening on port 3000"); 
})