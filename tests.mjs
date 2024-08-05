import {assert} from 'chai';
import {test, addTwo, multTwo, subTwo, divTwo} from './simple.js';

describe('App', function() {
    it('test should return 1', function(){
        assert.equal(test(), 1);
    });
    it('addTwo should return 4', function(){
        assert.equal(addTwo(2,2), 4);
    });
    it('multTwo should return 6', function(){
        assert.equal(multTwo(2,3), 6);
    });
    it('subTwo should return 2', function(){
        assert.equal(subTwo(4,2), 2);
    });
    it('divTwo should return 2', function(){
        assert.equal(divTwo(4,2), 2);
    });
});