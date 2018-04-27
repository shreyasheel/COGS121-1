// start with what's in ../petsapp-v1/ and work toward building ../petsapp-v2/

const express = require('express');
const app = express();

app.use(express.static('static_files'));


// simulates a database in memory, to make this example simple and
// self-contained (so that you don't need to set up a separate database).
// note that a real database will save its data to the hard drive so
// that they become persistent, but this fake database will be reset when
// this script restarts. however, as long as the script is running, this
// database can be modified at will.
const fakeDatabase = {
  'Philip': {job: 'professor', pet: 'cat.jpg'},
  'John': {job: 'student',   pet: 'dog.jpg'},
  'Carol': {job: 'engineer',  pet: 'bear.jpg'}
};


// GET a list of all usernames
//
// To test, open this URL in your browser:
//   http://localhost:3000/users
app.get('/users', (req, res) => {
  const allUsernames = Object.keys(fakeDatabase); // returns a list of object keys
  console.log('allUsernames is:', allUsernames);
  res.send(allUsernames);
});


// GET profile data for a user
//
// To test, open these URLs in your browser:
//   http://localhost:3000/users/Philip
//   http://localhost:3000/users/Carol
//   http://localhost:3000/users/invalidusername
app.get('/users/:userid', (req, res) => {
  const nameToLookup = req.params.userid; // matches ':userid' above
  const val = fakeDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); // for debugging
  if (val) {
    res.send(val);
  } else {
    res.send({}); // failed, so return an empty object instead of undefined
  }
});

// start the server at URL: http://localhost:3000/
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});
