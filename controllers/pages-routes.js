const router = require('express').Router();
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');
const { Trail, User, Comment, Rating } = require('../models');
const storageRef = require('./api/trail-routes');
const downloadTrailImage = require('./api/trail-routes');

/* Render the comments for the trail selected and send user to comment page*/
router.get('/:id', (req, res) => {
    const trail = {
        id: 1,
        name: "South Kaibab Trail",
        length: 3,
        dog_friendly: true,
        bike_friendly: true,
        difficulty: "Difficult",
        description: "This trail descends a series of steep, exposed switchbacks, allowing you to grasp the magnitude of the canyon as you stare into its depths.",
        posted_by: 1
    }
        // pass data to template
        res.render('comment', { trail });
});

router.get('/users/:id', (req, res) => {
        // pass data to template
        res.render('usertrails');
});

router.get('/favorites/:id', (req, res) => {
    // pass data to template
    res.render('favorites');
});


module.exports = router; 