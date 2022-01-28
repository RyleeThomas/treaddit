const router = require('express').Router();
const sequelize = require('../config/connection');
const Sequelize = require('sequelize');
const { Trail, User, Comment, Rating } = require('../models');
const storageRef = require('./api/trail-routes');
const downloadTrailImage = require('./api/trail-routes');

/* loading all trails the loggedIn user has created 
router.get('/', (req, res) => {
    Trail.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'name',
            'length',
            'dog_friendly',
            'bike_friendly',
            'difficulty',
            'description',
            'img_ref'
        ],
        group: 'id',
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'trail_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: Rating,
                attributes: [[Sequelize.fn('AVG', Sequelize.col('rating')), 'avgRating']]
            }
            // {
            //     model: User,
            //     attributes: ['username']
            // }
        ]
    })
    .then(dbTrailData => {
        if(!dbTrailData) {
            res.status(404).json({message: 'No trail found'})
            return;
        }
        const trails = dbTrailData.map(trail => trail.get({ plain: true }));
        res.render('usertrails', {trails});

    }) .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
*/
router.get('/', (req, res) => {
    res.render('usertrails');
});
module.exports = router;