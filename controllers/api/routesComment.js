const router = require('express').Router();
const { Comment } = require('../../models');
const auth = require('../../utils/auth');

router. post('/', auth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;