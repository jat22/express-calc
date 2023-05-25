const express = require('express');
const ExpressError = require('./expressError')
const app = express()

const { createNumAry, findMean, findMedian, findMode } = require('./helpers.js')

app.get('/mean', (req, res) => {
	const numAry = createNumAry(req.query.nums)
	if(numAry instanceof Error){
		throw new ExpressError(numAry.message, 400)
	}
	const mean = findMean(numAry)
	return res.json({operation : "mean", value : mean})
})

app.get('/median', (req, res) => {
	const numAry = createNumAry(req.query.nums)
	if(numAry instanceof Error){
		throw new ExpressError(numAry.message, 400)
	}
	const median = findMedian(numAry)
	return res.json({operation : "median", value : median})
})

app.get('/mode', (req, res) => {
	const numAry = createNumAry(req.query.nums)
	if(numAry instanceof Error){
		throw new ExpressError(numAry.message, 400)
	}
	const mode = findMode(numAry)
	return res.json({operation : "mode", value : mode})
})


app.listen(3000, function() {
})

module.exports = {app}