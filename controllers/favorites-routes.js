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


module.exports = router; 