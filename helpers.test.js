const { createNumAry, findMean, findMedian, findMode } = require('./helpers.js')

describe("convert and validate num string", function(){
	test('create array of numbers', function(){
		const numString = "1,2,3,4,5";
		expect(createNumAry(numString)).toEqual([1,2,3,4,5])
	})
	test('put in ascending order', function(){
		const numString = "5,2,4,6,9,8"
		expect(createNumAry(numString)).toEqual([2,4,5,6,8,9])
	})
})

describe("find mean", function(){
	test("integers", function(){
		const numAry = [1,2,3,4,5];
		expect(findMean(numAry)).toEqual(3)
	})
	test("large numbers", function(){
		const numAry = [100, 1000, 10000, 300000];
		expect(findMean(numAry)).toEqual(77775)
	})
	test("zero", function(){
		const numAry = [0];
		expect(findMean(numAry)).toEqual(0)
	})
})

describe("find median", function(){
	test("even number of nums", function(){
		const numAry = [1,2,3,4];
		expect(findMedian(numAry)).toEqual(2.5)
	})
	test("odd number of nums", function(){
		const numAry = [1,2,3,4,5];
		expect(findMedian(numAry)).toEqual(3)
	})
	test("zero", function(){
		const numAry = [0];
		expect(findMedian(numAry)).toEqual(0)
	})
})

describe("find mode", function(){
	test("mode", function(){
		const numAry = [1,1,1,1,2,3,3,3,4];
		expect(findMode(numAry)).toEqual(1)
	})
	test("no numbers repeated", function(){
		const numAry = [1,2,3,4,5];
		expect(findMode(numAry)).toEqual("No Mode")
	})
})