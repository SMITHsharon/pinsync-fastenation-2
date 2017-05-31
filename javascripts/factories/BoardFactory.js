app.factory("BoardFactory", function($http, $q, FIREBASE_CONFIG) {

	let getBoardList = (userId) => {
		let boardz = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
			.then((fbBoards) => {
				let boardCollection = fbBoards.data;
				if (boardCollection !== null) {
					Object.keys(boardCollection).forEach((key) => {
						boardCollection[key].id = key;
						boardz.push(boardCollection[key]);
					});
				}
				resolve(boardz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let getSingleBoard = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/boards/${id}.json`)
			.then((resultz) => {
				resultz.data.id = id;
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let postNewBoard = (newBoard) => {
console.log("postingNewBoard in Factory");
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify(newBoard))
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let editBoard = (board) => {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/boards/${board.id}.json`, JSON.stringify({
		        description: board.description,
		        timestamp: board.timestamp,
		        title: board.title,
		        uid: board.uid
		      }))
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	let deletzBoard = (id) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/boards/${id}.json`)
			.then((resultz) => {
				resolve(resultz);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};


	return {
		getBoardList:getBoardList,
		getSingleBoard:getSingleBoard,
		postNewBoard:postNewBoard,
		editBoard:editBoard,
		deletzBoard:deletzBoard
	};

});