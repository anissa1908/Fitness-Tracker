const Workout = require("../Models/UserModel")


// Routes
module.exports = function(app){

    app.get("/api/workouts", function (req, res) {
        Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
    
    
    app.post("/api/workouts", ({body}, res) => {
        Workout.create({})
        .then(data => res.json(data))
        .catch(err=> console.log(err))
    });

    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises:req.body}})
        .then(data=> res.json(data))
        .catch(err => console.log(err))
    })

    app.get("/api/workouts/range", (req, res) => {
        Workout.find()
        .then(data=> res.json(data))
        .catch(err => console.log(err))
    })
}

