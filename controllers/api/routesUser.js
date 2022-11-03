const router = require('express').Router();
const { response } = require('express');
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.logged_in = true;
            res.json({newUser, message: `Logged in! Welcome.`});
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
        const validPass = userData.checkPassword(req.body.password)

        if (!validPass) {
            res.status(400).json({ message: `Hmm, sorry. Can't seem to find either that username or that password. Give it another try?` });
            return;
        }
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.json({ userData, message: `Successfully logged in, good on ya.` });
        });
    } catch (err) {
        res.status(400).json({ message: `Hmm, sorry. Can't seem to find either that username or that password. Give it another try?`});
    }
})

router.post('/logout', async (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router