const assert = require('assert');
const Decorator = require('../decorator');

describe('Decorator', function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
    });

    xit('should start with an empty paint stock', function(){
        const actual = decorator.paintStock;
        assert.strictEqual(actual, 0);
    });

    
})