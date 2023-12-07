const exercises = require('../Exercise.json');

class ExerciseController {
    static getExercisesByEquipment(req, res) {
        const { equipment } = req.query;

        // Cari latihan yang memiliki equipment sesuai dengan query parameter
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
    }
}

module.exports = ExerciseController;
