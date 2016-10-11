const assert = require('chai').assert
const Player = require('./../lib/player')
const canvas = { width: 1470, height: 770 }

describe('Player', () => {
  context('properties', () => {
    it('has x and y properties', () => {
      const bomberman = new Player()
      assert.property(bomberman, 'x')
      assert.property(bomberman, 'y')
    })

    it('has height and width properties', () => {
      const bomber = new Player()
      assert.property(bomber, 'height')
      assert.property(bomber, 'width')
    })
  })

  context('property values', () => {
    it('has starting default coordinates', () => {
      const bomber = new Player()
      assert.equal(bomber.x, 30)
      assert.equal(bomber.y, 30)
    })

    it('has starting default height and width', () => {
      const bomber = new Player()
      assert.equal(bomber.height, 30)
      assert.equal(bomber.width, 50)
    })
  })

  context('movement', () => {
    it('has a function called "moveRight"', () => {
      const bomber = new Player()
      assert.isFunction(bomber.moveRight)
    })

    it('has a function called "moveLeft"', () => {
      const bomber = new Player()
      assert.isFunction(bomber.moveLeft)
    })

    it('has a function called "moveUp"', () => {
      const bomber = new Player()
      assert.isFunction(bomber.moveUp)
    })

    it('has a function called "moveDown"', () => {
      const bomber = new Player()
      assert.isFunction(bomber.moveDown)
    })

    it('"moveRight" increases x by one', () => {
      const bomber = new Player(30, 30, canvas)
      assert.equal(bomber.x, 30)

      bomber.moveRight()
      assert.equal(bomber.x, 31)
    })

    it('"moveLeft" decreases x by one', () => {
      const bomber = new Player(51, 30, canvas)
      assert.equal(bomber.x, 51)

      bomber.moveLeft()
      assert.equal(bomber.x, 50)
    })

    it('"moveUp" decreases y by one', () => {
      const bomber = new Player(30, 31, canvas)
      assert.equal(bomber.y, 31)

      bomber.moveUp()
      assert.equal(bomber.y, 30)
    })

    it('"moveDown" increases y by one', () => {
      const bomber = new Player(30, 30, canvas)
      assert.equal(bomber.y, 30)

      bomber.moveDown()
      assert.equal(bomber.y, 31)
    })
  })

  context('movement boundaries', () => {
    it('"moveRight" cannot move outside the canvas ', () => {
      const bomber = new Player(1470, 770, canvas)
      assert.equal(bomber.x, 1470)

      bomber.moveRight()
      assert.equal(bomber.x, 1470)
    })

    it('"moveLeft" cannot move outside the canvas ', () => {
      const bomber = new Player(50, 770, canvas)
      assert.equal(bomber.x, 50)

      bomber.moveLeft()
      assert.equal(bomber.x, 50)
    })

    it('"moveUp" cannot move outside the canvas ', () => {
      const bomber = new Player(30, 30, canvas)
      assert.equal(bomber.y, 30)

      bomber.moveUp()
      assert.equal(bomber.x, 30)
    })

    it('"moveDown" cannot move outside the canvas ', () => {
      const bomber = new Player(30, 740, canvas)
      assert.equal(bomber.y, 740)

      bomber.moveDown()
      assert.equal(bomber.y, 740)
    })
  })
})