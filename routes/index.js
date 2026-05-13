const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.emilyRoute);
routes.get('/hannah', lesson1Controller.hannahRoute);
routes.get('/sarah', lesson1Controller.sarahRoute);

module.exports = routes;