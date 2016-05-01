'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var riotCtrlStub = {
  index: 'riotCtrl.index',
  show: 'riotCtrl.show',
  create: 'riotCtrl.create',
  update: 'riotCtrl.update',
  destroy: 'riotCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var riotIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './riot.controller': riotCtrlStub
});

describe('Riot API Router:', function() {

  it('should return an express router instance', function() {
    riotIndex.should.equal(routerStub);
  });

  describe('GET /api/riot', function() {

    it('should route to riot.controller.index', function() {
      routerStub.get
        .withArgs('/', 'riotCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/riot/:id', function() {

    it('should route to riot.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'riotCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/riot', function() {

    it('should route to riot.controller.create', function() {
      routerStub.post
        .withArgs('/', 'riotCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/riot/:id', function() {

    it('should route to riot.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'riotCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/riot/:id', function() {

    it('should route to riot.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'riotCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/riot/:id', function() {

    it('should route to riot.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'riotCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
