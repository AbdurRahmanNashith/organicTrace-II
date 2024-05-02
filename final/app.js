const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const Web3 = require('web3');
// const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = process.env.MONGODB_URI;

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(dbURI)
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.render('hero');
  //   res.redirect('/blogs');
});

app.get('/home', (req, res) => {
  res.render('home');
  //   res.redirect('/blogs');
});


app.get('/form', (req, res) => {
  res.render('form');
  //   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

app.post('/submit', (req, res) => {
  console.log('req.body');
  console.log(req.body);
  // const uri = "mongodb+srv://ibrahimfardeen:ibrahimfardeen@test123.8wvw0m0.mongodb.net/";

  // // Connect to MongoDB
  // mongoose.connect(uri, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  // Get the default connection
  const db = mongoose.connection;

  // Event listeners for connection
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB successfully");
    // Once connected, you can define and perform operations with Mongoose models here
  });

  // Define and create a Mongoose model (optional)
  const Schema = mongoose.Schema;
  const exampleSchema = new Schema({
    name: String,
    age: Number,
  }, {
    timestamps: true
  });

  const ExampleModel = mongoose.model("Example", exampleSchema);

  // Example usage: Create a new document
  const exampleDoc = new ExampleModel({
    name: "John",
    age: 30
  });
  exampleDoc.save().then(() => {
    console.log("Document inserted successfully:")
  })

});


// blog routes
// app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404'
  });
});