const router = require('express').Router();
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');
const { Trail, User, Comment, Rating, Favorite } = require('../models');
const storageRef = require('./api/trail-routes');
const downloadTrailImage = require('./api/trail-routes');

router.get('/', (req, res) => {
        /* add route to recieve all trails the user has add to favorite list */
        res.render('favorites');
});

const exphbs = require('express-handlebars');
const helpers = require('../utils/helpers')
const hbs = exphbs.create({ helpers });

/* helper functiont display bootstrap/pill background color */
hbs.handlebars.registerHelper('difficultyLevel', function (difficulty) {
    if(difficulty == "Easy"){
        return "success"
    }
    if(difficulty == "Moderate"){
        return "warning"
    }
    if(difficulty == "Difficult"){
        return "danger"
    }
});

/* Create a handle to get the value of rating, and send the mount of stars back */

module.exports = router;