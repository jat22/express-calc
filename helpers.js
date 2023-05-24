
function createNumAry(numStr){
	const strAry = numStr.split(',');
	const numsAry = strAry.map((num)=> {
		return Number(num)
	});
	return numsAry
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
			mode = num
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