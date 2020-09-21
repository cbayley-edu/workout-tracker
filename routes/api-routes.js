const Workout = require("../models/workout.js");

module.exports = function(app){

    // getLastWorkout()
    app.get("/api/workouts", (req, res) => {
        Workout.find()
          .then(data => {
            res.json(data);
        })
          .catch(err => {
            res.json(err);
        });
    });

    // addExercise(data)
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
          params.id,
          { 
              $push: { exercises: body } 
          },
          { 
              new: true, 
              runValidators: true 
          }
        )
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });

    // createWorkout(data = {})
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });

    // getWorkoutsInRange()
    app.get("/api/workouts/range", (req,res) => {
        Workout.find()
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json(err);
          });
    });
}

