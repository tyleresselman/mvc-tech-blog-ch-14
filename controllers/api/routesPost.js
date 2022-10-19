const router = require('express').Router();
const { Post } = require('../../models/');
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => {
    const contents = req.contents;
    try {
        const newPost = await Post.create({ ...contents, user_id: req.session.user_id });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const [postEdit] = await Post.update(req.contents, {
            where: {
                id: req.params.id
            }
        });
        if (postEdit > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const [postEdit] = Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (postEdit > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
})