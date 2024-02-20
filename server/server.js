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


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;
