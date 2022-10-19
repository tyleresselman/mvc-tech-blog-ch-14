const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');

router.post('/signup', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.username = newUser.username;
            req.session.logged_in = true;
            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            }
        });

        if (!userData) {
            res.status(400).json({ message: `Hmm, sorry. Can't seem to find either that username or that password. Give it another try?` });
            return;
        }
    }
})