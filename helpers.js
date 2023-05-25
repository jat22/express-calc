
function createNumAry(numStr){
	if(!numStr){
		return new Error(
			"No input provided"
		)
	}
	const strAry = numStr.split(',');
	const numsAry = []
	for(let num of strAry){
		n = Number(num)
		if(!n){
			return new Error(
				`${num} is not a number`
			) 
		}
		numsAry.push(n)
	}
	console.log(numsAry)
	return numsAry.sort(function(a,b){return a-b})
}

function findMean(numAry){
	let sum = 0;
	for (let n of numAry){
		sum += n
	}
	return sum / numAry.length
}

function findMedian(numAry){
	let median;
	if (numAry.length % 2 !== 0){
		median = numAry[Math.floor(numAry.length / 2)];
	} else {
		const i = numAry.length / 2;
		median = (numAry[i] + numAry[i-1]) / 2;
	}
	return median
}

function findMode(numAry){
	const counts = {}
	for(let i = 0; i < numAry.length; i++){
		counts[numAry[i]] = (counts[numAry[i]] || 0) + 1;
	}

	let maxFreq = 0
	let mode
	for(let num in counts){
		if(counts[num] > maxFreq){
			maxFreq = counts[num]
			mode = Number(num)
		}
		if(maxFreq === 1){
			mode = "No Mode"
		}
	}
	return mode
}

module.exports = {
	createNumAry,
	findMean,
	findMedian,
	findMode
}