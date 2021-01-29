require('cookie-parser');
require('dotenv').config();
const logger = require('morgan');
const express = require('express');
const app = express();
const hbs = require('hbs');
const hbsHelpers = require('./middlewares/hbs.helpers');
const cookieParser = require('cookie-parser');

app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.locals.APP_URL = process.env.APP_URL || 'http://localhost:3000';
    next();
});

/*VIEW ENGINE SETUP*/
app.set('views', './views');
app.set('view engine', 'hbs');
hbs.registerPartials('./views/partials');


/*ROUTING*/
const routes = require('./configs/routes.js');
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server up and running!');
});
