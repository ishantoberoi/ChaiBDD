var expect = chai.expect;


var testObj = {

	returnObj : function(){
		return {"name":"testFunction"}
	},

	'framework':'express',
	'myobj':{
		'name':'chai mocha'
	}
}

describe('Test Functions',function(){
	describe('#testFun()',function(){

		it('should return an object',function(){
			expect(testObj.returnObj()).to.be.an('object');
		})

		it('should have a property named framework with value express',function(){
			expect(testObj).to.have.property('framework').to.equal('express');
		})

		it('should have a property name in an object called myobj',function(){
			expect(testObj).to.have.deep.property('myobj.name','chai mocha');
		})

	});
});