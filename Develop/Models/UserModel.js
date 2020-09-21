const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: Number,
    }

    type: {
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

    totalDuration: {
        type: Number,
    }

    }
});