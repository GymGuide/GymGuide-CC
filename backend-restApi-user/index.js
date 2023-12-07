// import dependencies
const express = require('express');
const { config } = require('dotenv').config();

const Authentication = require('./controllers/authenticaion');
const ExerciseController = require('./controllers/exercise'); 
const { errorHandler } = require('./controllers/errorHandler');

const app = express();
app.use(express.json());

// Authentication routes
app.post('/register', Authentication.register);
app.post('/login', Authentication.login);

// Exercise route
app.get('/exercises', ExerciseController.getExercisesByEquipment);

// Prediction route

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Base URL : localhost:${process.env.PORT}`);
});
