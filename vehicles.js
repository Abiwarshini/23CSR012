const mongoose = require('mongoose');

const vehicle = new mongoose.Schema({
    TaskId:{
      type:String,
      require:true
    },
    Duration:{
      type:String,
      require:true
    },
    Impact:{
        type:String,
        require:true
    }
})

const Vehicles  = mongoose.Model("Vehicls",vehicle);
module.exports = Vehicles;