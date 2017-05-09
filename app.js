function createArray () {
	var results = $('#user-text').val();
	var entryArray = results.replace(/[.,\/#!$%?\^&\*;:{}=\-_'~()]/g,"").split(' ');
	//console.log(entryArray);
	return entryArray;
};

function myArrayLength () {
	return ((createArray()).length);
};

function uniqueCount () {
	//alert('can you see this?');
	var uniqueCounter = [];
	var tempArray = createArray();
	tempArray.forEach(function (words) {
		if (uniqueCounter.includes(words) === false) {
			uniqueCounter.push(words);
		};
	});
	console.log(uniqueCounter);
	return	uniqueCounter.length;
};

function avgLength () {
	var tempArray2 = createArray();
	var lengthArray = tempArray2.map(function (words){
		return words.length;
	});
	var lengthTotal = lengthArray.reduce(function (total, num) {
		return total + num;
	});
	var lengthAvg = lengthTotal / (createArray().length);
	//console.log(lengthTotal);
	//console.log(createArray().length);
	console.log(lengthAvg);
	return lengthAvg.toFixed(2);
}

function handleSubmit () {
	$('form').submit(function(){
		//console.log(myArrayLength());
		$('.js-word-count').text((myArrayLength()));
		$('.js-unique-word-count').text((uniqueCount()));
		$('.js-avg-word-length').text((avgLength()) + ' characters');
		//console.log(uniqueCount());
		//console.log(avgLength());
		$('.text-report').removeClass('hidden');
		return false;
		//createArray();
		//avgLength();
		//alert($('#user-text').val());
	});
}

$(createArray());
$(handleSubmit());