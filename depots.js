const mongoose = require('mongoose');

const depots = new mongoose.Schema({
    ID:{
        type:String,
        required:true
    },
    MechanicHours:{
        type:String,
        required:true
    }
});
const Depots =  new mongoose.model("Depots",depots);

module.exports = Depots;