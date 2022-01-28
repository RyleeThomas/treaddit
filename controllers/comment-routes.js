const router = require('express').Router();
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');
const { Trail, User, Comment, Rating } = require('../models');
const storageRef = require('./api/trail-routes');
const downloadTrailImage = require('./api/trail-routes');

/* Render the comments for the trail selected on seperate page*/
router.get('/:id', (req, res) => {
    const trail = {
        id: 1,
        name: "South Kaibab Trail",
        length: 3,
        dog_friendly: true,
        bike_friendly: true,
        difficulty: "Difficult",
        img_ref: "/example.jpg",
        description: "This trail descends a series of steep, exposed switchbacks, allowing you to grasp the magnitude of the canyon as you stare into its depths.",
    }
        // pass data to template
        res.render('comment', { trail });
});

/* Create a handle to get the value of rating, and send the mount of stars back */

module.exports = router;