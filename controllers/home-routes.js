const router = require('express').Router();
const { Trail, User } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    res.render('homepage');
})

module.exports = router; 