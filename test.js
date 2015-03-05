var expect = require('chai').expect;
var Deque = require('./');

describe('deque-js', function() {
  it('should work properly', function() {
    var dq = new Deque();
    dq.push(1);
    dq.push(2);
    dq.push(3);
    dq.push(4);
    dq.push(5);

    expect(dq.pop()).to.equal(5);
    expect(dq.pop()).to.equal(4);

    dq.inject(7);
    dq.inject(8);
    dq.inject(9);

    expect(dq.eject()).to.equal(9);
    expect(dq.eject()).to.equal(8);

    expect(dq.pop()).to.equal(3);
    expect(dq.pop()).to.equal(2);
  });
});
