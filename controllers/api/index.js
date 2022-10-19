const router = require('express').Router();

const routesUser = require('./routesUser');
const routesPost = require('./routesPost');
const routesComment = require('./routesComment');

router.use('/user', routesUser);
router.use('/post', routesPost);
router.use('/comment', routesComment);

module.exports = router;
