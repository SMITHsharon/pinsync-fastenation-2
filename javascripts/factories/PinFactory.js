app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){
	let getPinList = (boardId) => {
		let pinz = [];
		return $q((resolve, reject) => {
			console.log("in PinFactory", boardId);
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="boardid"&equalTo="${boardId}"`)
			.then((fbPins) => {
				let pinCollection = fbPins.data;
				console.log("pinCollection", pinCollection);
				Object.keys(pinCollection).forEach((key) => {
					pinCollection[key].id = key;
					pinz.push(pinCollection[key]);
				});
				resolve(pinz);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	return {getPinList:getPinList};
});