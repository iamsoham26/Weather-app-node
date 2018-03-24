var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Soham'
  };
  setTimeout(() => {
    callback(user);
  },3000)
};

getUser(26, (userObject) => {
  console.log(userObject);
});
