'use strict';

var express = require('express');
var controller = require('./riot.controller');

var router = express.Router();

router.get('/summoner/getbyname/:region/:name', controller.summonerByName);
router.get('/featured/:region', controller.featured);

module.exports = router;
