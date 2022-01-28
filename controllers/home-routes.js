const router = require('express').Router();
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');
const { Trail, User, Comment, Rating } = require('../models');
const storageRef = require('./api/trail-routes');
const downloadTrailImage = require('./api/trail-routes');

/* Loading all trails to homepage on render */
router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        name: "South Kaibab Trail",
        length: 3,
        dog_friendly: true,
        bike_friendly: true,
        difficulty: "Difficult",
        description: "This trail descends a series of steep, exposed switchbacks, allowing you to grasp the magnitude of the canyon as you stare into its depths.",
        img_ref: "/example.jpg",
        comment: [
            { 
            id: 1,
            comment_text: "I love this trail!"
        },{
            id: 1,
            comment_text: "This trail has a beautiful view."
        }
        ],
        rating: 3,
        
    });
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