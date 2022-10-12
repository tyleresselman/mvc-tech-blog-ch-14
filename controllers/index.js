const router = require('express').Router();

const routesApi = require('./api');
const routesHome = require('./routesHome');
const routesDashboard = require('./routesDashboard');

router.use('/', routesHome);
router.use('/api', routesApi);
router.use('/dashboard', routesDashboard);

module.exports = router;