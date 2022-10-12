const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ include: [User] });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {posts});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', auth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        const post = postData.get({ plain: true });
        res.render('post', { post, logged_in: true});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;