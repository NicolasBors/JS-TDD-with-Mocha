const assert = require('assert')
const newRectangle = require('../newRectangle')

describe('Rectangle', () => {
    it('has two sides which are the same length', () => {
        assert.strictEqual(newRectangle.RectangleA.isSquare(), true)
    })
    it('has not two sides which are the same length', () => {
        assert.strictEqual(newRectangle.RectangleB.isSquare(), false)
    })
    it('returns the area of the rectangle', () => {
        assert.strictEqual(newRectangle.RectangleC.getArea(), 91)
    })
    it('returns the perimeter of the rectangle', () => {
        assert.strictEqual(newRectangle.RectangleD.getPerimeter(), 40)
    })
})