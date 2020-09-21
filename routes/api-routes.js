const Workout = require("../models/workout.js");

module.exports = function(app){

    // uses seed.js to populate db
    // if db *is* empty, then there is code in the seed.js file that will exit the app upon seeding the db for the first time    
    Workout.find({})
        .then(data => {
            console.log("Checking if db is populated");
            if (data.length === 0) {
                console.log("DB is empty");
                require("../seeders/seed.js");
        }
    });

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

