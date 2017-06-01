app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG) {

  let addUser = (authData) => {
    return $q((resolve, reject) => {
      console.log(authData);
      $http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`, 
        JSON.stringify({ 
          uid: authData.uid,
          username: authData.username,
          imageURL: authData.imgURL
        })
      )
      .then((storeUserSuccess) => {
        resolve(storeUserSuccess);
      })
      .catch((storeUserError) => {
        reject(storeUserError);
      });
    });
  };

  let getUser = (userId) =>{
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
        .then((userObject) => {
          let users = [];
          Object.keys(userObject.data).forEach((key) => {
            users.push(userObject.data[key]);
          });
          resolve(users[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  let editEmail = (newEmail) => {
    var user = firebase.auth().currentUser;
      user.updateEmail(newEmail).then(function() {
    }, function(error) {
        // An error happened.
    });
  }

  let editUser = (id, updatedInfo) => {
    console.log("id", id);
    return $q((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/users/${id}.json`, JSON.stringify({
            username: updatedInfo.name,
            imageURL: updatedInfo.imageURL
      }))
      .then((resultz) => {
        resolve(resultz);
      })
      .catch((error) => {
        reject(error);
      });
    });
  };
  return {addUser:addUser, getUser:getUser, editUser:editUser, editEmail:editEmail};
});