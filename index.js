const express = require('express');
const path =  require('path')

const app = express(); 

app.set('view engine', '.ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'style')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'js')));


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.render('home');
});


app.listen(PORT, () => {
    console.log('Server has been started...');
});
