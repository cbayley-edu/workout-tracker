/* eslint-disable no-unused-vars */
// get all workout data from back-end

fetch("/api/workouts/range")
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    populateChart(data);
  });

API.getWorkoutsInRange();

function generatePalette() {
  const arr = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600"
  ];

  return arr;
}

const d = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const today = weekday[d.getDay()];
const todayMinusOne = weekday[d.getDay(d.setDate(d.getDate() - 1))];
const todayMinusTwo = weekday[d.getDay(d.setDate(d.getDate() - 1))];
const todayMinusThree = weekday[d.getDay(d.setDate(d.getDate() - 1))];
const todayMinusFour = weekday[d.getDay(d.setDate(d.getDate() - 1))];
const todayMinusFive = weekday[d.getDay(d.setDate(d.getDate() - 1))];
const todayMinusSix = weekday[d.getDay(d.setDate(d.getDate() - 1))];

function populateChart(data) {
  const durations = duration(data);
  const pounds = calculateTotalWeight(data);
  const workouts = workoutNames(data);
  const colors = generatePalette();

  const line = document.querySelector("#canvas").getContext("2d");
  const bar = document.querySelector("#canvas2").getContext("2d");
  const pie = document.querySelector("#canvas3").getContext("2d");
  const pie2 = document.querySelector("#canvas4").getContext("2d");

  const lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: [
        todayMinusSix,
        todayMinusFive,
        todayMinusFour,
        todayMinusThree,
        todayMinusTwo,
        todayMinusOne,
        today
      ],
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "red",
          borderColor: "red",
          data: durations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });

  const barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: [
        todayMinusSix,
        todayMinusFive,
        todayMinusFour,
        todayMinusThree,
        todayMinusTwo,
        todayMinusOne,
        today
      ],
      datasets: [
        {
          label: "Pounds",
          data: pounds,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Pounds Lifted"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  const pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: colors,
          data: durations
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed"
      }
    }
  });

  const donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Exercises Performed",
          backgroundColor: colors,
          data: pounds
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Exercises Performed"
      }
    }
  });
}

function duration(data) {
  const durations = [];

  // data.forEach(workout => {
  //   durations.push(workout.totalDuration);
  // });

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      durations.push(exercise.duration);
    });
  });
  return durations;
}

function calculateTotalWeight(data) {
  const total = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      total.push(exercise.weight);
    });
  });

  return total;
}

function workoutNames(data) {
  const workouts = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  });

  return workouts;
}
