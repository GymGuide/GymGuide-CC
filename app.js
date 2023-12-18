const express = require('express');
const bodyParser = require('body-parser');
const exercises = require('./Exercise.json'); // Import data latihan dari file JSON

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to retrieve all exercises
app.get('/', (req, res) => {
    return res.json({
        data: exercises,
        status: {
            code: 200,
            message: 'Success retrieving all exercises'
        }
    });
});

// Route to retrieve exercises based on equipment or muscle
app.get('/exercises', (req, res) => {
const { equipment, muscle } = req.query;

    if (equipment) {
        // Filter exercises based on equipment
        const filteredExercises = exercises.filter(exercise => exercise.equipment === equipment);

        if (filteredExercises.length > 0) {
            return res.json({
                data: filteredExercises,
                status: {
                    code: 200,
                    message: 'Success retrieving exercises'
                }
            });
        } else {
            return res.status(404).json({
                status: {
                    code: 404,
                    message: 'Exercises not found for the specified equipment'
                }
            });
        }
    } else if (muscle) {
        // Filter exercises based on muscle
        const filteredExercises = exercises.filter(exercise => exercise.muscle === muscle);

        if (filteredExercises.length > 0) {
            return res.json({
                data: filteredExercises,
                status: {
                    code: 200,
                    message: 'Success retrieving exercises'
                }
            });
        } else {
            return res.status(404).json({
                status: {
                    code: 404,
                    message: 'Exercises not found for the specified muscle'
                }
            });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
