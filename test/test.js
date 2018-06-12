const assert = require('chai').assert;
const expect = require('chai').expect;
const Board = require('../lib/board.js');


describe('Board', function() {
  let subject
  let grid
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

    it('returns true if there is a winner VIA 3xO in row1', function() {
      grid = ["O", "O", "O", "X", "O", "", "", "", ""]
      expect(subject.hasAnybodyWon(grid)).to.eql(true)
    });

    it('returns true if there is a winner VIA 3xX in row1', function() {
      grid = ["X", "X", "X", "X", "O", "O", "O", "", ""]
      expect(subject.hasAnybodyWon(grid)).to.eql(true)
    });

  });
});