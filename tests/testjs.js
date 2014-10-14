// var chai = require('chai'),
// 		expect = chai.expect,
// 		should = chai.should(),
// 		assert = chai.assert;



var assert = chai.assert,
		expect = chai.expect,
		should = chai.should();

var foobar = {
	sayHello : function(){
		return 'funcky chicken!';
	}
}

describe('Foobar',function(){
	describe('#sayHello()',function(){

		it('should work with assert',function(){
			assert.equal(foobar.sayHello(),'funcky chicken!');
		})

		it('should work with expect',function(){
			expect(foobar.sayHello()).to.equal('funcky chicken!')
		})	

		it('should work with should',function(){
			foobar.sayHello().should.equal('funcky chicken!');
		})

	})

});



