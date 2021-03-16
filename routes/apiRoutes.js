const db = require("../models");

module.exports = function (app) {
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
    })
    
    app.get("/api/workouts", (req, res) => {
      db.Workout.aggregate([{
        $addFields: {
          totalDuration: {$sum:'$exercises.duration'}
        }
      }])
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: req.body}}
        , {new:true})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    })
    
    app.get("/api/workouts/range", (req, res) => {
      db.Workout.aggregate([{
        $addFields: {
          totalDuration: {$sum:'$exercises.duration'}
        }
      }]).sort({_id: -1}).limit(7)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
}