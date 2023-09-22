const mongoose = require('mongoose');

// Import of the models
const User = require('./models/userModel');
const Ad = require('./models/adModel');

// Import of the data from './data.json'
const data = require('./data');

mongoose.set('strictQuery', false);
const MONGODB_URI = 'mongodb://0.0.0.0:27017/guitar-seller-db';

// Connection to the database "guitar-seller-db"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any user to the database, let's remove all existing ones
    return User.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    // return Recipe.create({ title: 'Brownie', level: 'Easy Peasy', ingredients: ['chocolate', 'flour'], cuisine: 'Kitchen', dishType: 'dessert', duration: 30, creator: 'Gerard' })
    return User.insertMany(data);
  })
  .then((lastCreatedArr) => {
    lastCreatedArr.forEach(user => console.log(user.name));
  })
  .then(() => {
    return User.findOneAndUpdate({ user: "carlos" });
  })
  .then((updatedUser) => {
    console.log(`${updatedUser.name} updated correctly`);
  })
  .then(() => {
    return User.deleteOne({ name: 'carlos' });
  })
  .then((deletedUser) => {
    console.log(`${deletedUser.name} succesfully removed from DB`);
  })
  .then(() => mongoose.connection.close())
  .catch(error => {
    console.error('Error connecting to the database', error);
  });