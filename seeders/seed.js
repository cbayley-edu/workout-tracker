const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const workoutSeed = [
  {
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 30,
        weight: 40,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 40,
        weight: 60,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 35,
        weight: 150,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 35,
        weight: 75,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 15,
        weight: 80,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 125,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 25,
        weight: 250,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 1)),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 60,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate())),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 40,
        weight: 60,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() + 1)),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 205,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() + 2)),
    exercises: [
      {
        type: "cardio",
        name: "Swimming",
        duration: 50,
        distance: 1
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() + 3)),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() + 4)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 15,
        weight: 75,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() + 5)),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 15,
        weight: 150,
        reps: 10,
        sets: 4
      }
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
