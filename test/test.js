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

    it('returns false if there is no winner', function() {
      grid = ["X", "O", "X", "X", "X", "O", "O", "X", ""]
      expect(subject.hasAnybodyWon(grid)).to.eql(false)
    });

    it('returns false if there are no moves made ', function() {
      grid = ["", "", "", "", "", "", "", "", ""]
      expect(subject.hasAnybodyWon(grid)).to.eql(false)
    });
  });

  describe('.draw()', function() {
    beforeEach(function() {
      subject = new Board()
    });

    it('returns true when all squares are filled and there is no winner', function() {
      grid = ["X", "O", "X", "X", "X", "O", "O", "X", "O"]
      expect(subject.draw(grid)).to.eql(true)
    });
  });

  describe('.availableSquares()', function() {
    beforeEach(function() {
      subject = new Board()
    });

    it('returns an array of indexes of the unfilled grid', function() {
      grid = ["X", "O", "X", "X", "X", "O", "O", "X", ""]
      expect(subject.availableSquares(grid)).to.eql([8])
    });

    it('returns an array of indexes of the unfilled grid', function() {
      grid = ["", "O", "", "", "X", "", "O", "X", ""]
      expect(subject.availableSquares(grid)).to.eql([0, 2, 3, 5, 8])
    });

  });


});