app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG){
	let getPinList = (boardId) => {
		let pinz = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="boardid"&equalTo="${boardId}"`)
			.then((fbPins) => {
				let pinCollection = fbPins.data;
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

	let viewSinglePin = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/pins/${id}.json`)
			.then((results) => {
				// results.id = id
				resolve(results);
			}).catch((error) => {
				reject(error);
			});
		});
	};


	let postNewPin = (newPin) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`, JSON.stringify(newPin))
			.then((results) => {
				resolve(results);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	let deletePin = (pinId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinId}.json`)
			.then((results) => {
				resolve(results);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	return {getPinList:getPinList, viewSinglePin:viewSinglePin, postNewPin:postNewPin, deletePin:deletePin};
});