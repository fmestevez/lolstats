/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/riot              ->  index
 * POST    /api/riot              ->  create
 * GET     /api/riot/:id          ->  show
 * PUT     /api/riot/:id          ->  update
 * DELETE  /api/riot/:id          ->  destroy
 */

'use strict';

const lolapi = require('leagueapi');
const Q = require('q');

function apiInit(region) {
  lolapi.init('e2bdca42-8677-4f8e-b935-fd49767b2796', region);
}

export function featured(req, res) {

  apiInit(req.params.region);

  return Q.denodeify(lolapi.getFeaturedGames)(req.params.region)
    .then((games) => {
      res.send(games);
    }, (err) => {
      res.send(err);
    });
}

export function gameBySummoner(req, res) {

  apiInit(req.params.region);

  return Q.denodeify(lolapi.getRecentGames)(req.params.summonerid)
    .then((games) => {
      res.send(games);
    }, (err) => {
      res.send(err);
    });
}

export function summonerByName(req, res) {

  apiInit(req.params.region);

  return Q.denodeify(lolapi.Summoner.getByName)(req.params.name)
    .then((summoner) => {
      res.send(summoner);
    }, (err) => {
      res.send(err);
    });
}
