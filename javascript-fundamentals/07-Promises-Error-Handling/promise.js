
let promise = new Promise(
	function(resolve, reject) {  
		setTimeout(reject, 100, 'someValue');
	}
);
promise.then(
	value => console.log('fulfilled: ' + value),
	error => console.log('rejected: ' + error)
);
