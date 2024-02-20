//get access to express and the path
const express = require("express");
const app = express();
//connecting to local host 3000
const path = require("path");
const port = 5050;

//anything that comes into express, unpackage it
app.use(express.json());
//don't break my API connection
app.use(express.urlencoded());

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use(express.static(path.resolve(__dirname, "./src/static/images")));

// sign up user
app.post('/signup', (req, res) => {
  res.status(200).send('user signed up');
});

// log in user
app.get('/login', (req, res) => {
  // redirect to main page occurs here
  res.status(200).send('user logged in');
});

// add job
app.post('/addJob', (req, res) => {
  res.status(200).send('job added');
});

// get job
app.get('/getJob', (req, res) => {
  res.status(200).send('jobs grabbed');
});

// add question
app.post('/addQuestion', (req, res) => {
  res.status(200).send('questions added');
});

// get question
app.get('/getQuestions', (req, res) => {
  res.status(200).send('questions retrieved');
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;
