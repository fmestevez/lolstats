'use strict';

var app = require('../..');
import request from 'supertest';

var newRiot;

describe('Riot API:', function() {

  describe('GET /api/riot', function() {
    var riots;

    beforeEach(function(done) {
      request(app)
        .get('/api/riot')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          riots = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      riots.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/riot', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/riot')
        .send({
          name: 'New Riot',
          info: 'This is the brand new riot!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRiot = res.body;
          done();
        });
    });

    it('should respond with the newly created riot', function() {
      newRiot.name.should.equal('New Riot');
      newRiot.info.should.equal('This is the brand new riot!!!');
    });

  });

  describe('GET /api/riot/:id', function() {
    var riot;

    beforeEach(function(done) {
      request(app)
        .get('/api/riot/' + newRiot._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          riot = res.body;
          done();
        });
    });

    afterEach(function() {
      riot = {};
    });

    it('should respond with the requested riot', function() {
      riot.name.should.equal('New Riot');
      riot.info.should.equal('This is the brand new riot!!!');
    });

  });

  describe('PUT /api/riot/:id', function() {
    var updatedRiot;

    beforeEach(function(done) {
      request(app)
        .put('/api/riot/' + newRiot._id)
        .send({
          name: 'Updated Riot',
          info: 'This is the updated riot!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRiot = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRiot = {};
    });

    it('should respond with the updated riot', function() {
      updatedRiot.name.should.equal('Updated Riot');
      updatedRiot.info.should.equal('This is the updated riot!!!');
    });

  });

  describe('DELETE /api/riot/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/riot/' + newRiot._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when riot does not exist', function(done) {
      request(app)
        .delete('/api/riot/' + newRiot._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
