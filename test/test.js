const assert = require('chai').assert;
const expect = require('chai').expect;
const Board = require('../lib/board.js');


describe('Board', function() {
  let subject
  describe('.grid', function() {
    beforeEach(function() {
      subject = new Board()
    });

    it('is expected to be an array', function() {
      expect(subject.grid).to.be.an('array');
    });

    it('has length of 9', function() {
      expect(subject.grid.length).to.eql(9)
    });

    it('is filled with empty strings', function() {
      subject.grid.forEach(subject => expect(subject).to.eql(""))
    });
  });

  describe('.hasAnybodyWon()', function() {
    beforeEach(function() {
      subject = new Board()
    });

    it('returns true if there is a winner', function() {
      subject.grid = ["O", "O", "O", "X", "O", "", "", "", ""]
      expect(subject.hasAnybodyWon(subject.grid)).to.eql(true)
    });
  });
});

// board will have a grid with 9 elements
// has someone won?
// check if row -> 012/345/678
// check if col ->036/147/258
// check if 048/246

// if not then draw