const Workout = require("public/workout.js")


// Routes
app.get("/public/workouts.js", function (req, res) {
    Workout.find()
     .then(data => {
         res.json(data)
     })
     .catch(err => {
         res.json(err)
     })
});


// app.post("/submit", ({body}, res) => {
//     const newUser = new User();
//     user.setworkoutType();
//     user.lastWorkout();

}

app.put()