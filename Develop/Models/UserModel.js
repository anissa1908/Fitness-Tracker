const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    Date: {
        type: Date,
        default: Date.now,

    totalDuration: {
        type: Number,
    }

    numExercises: {
        type: Number,
    }

    totalWeight: {
        type: Number,

    }


    totalSets: {
        type: Number,
        
    }

    totalReps: {
        type: Number,
        
    }

    totalDistance: {
        type: Number,
        
    }
    }
})