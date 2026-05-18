const mongoose =  require('mongoose');

const Create_DataBase_Connection = async() =>{
    try{
       await mongoose.connect(process.env,MONGO_URI);
       console.log("connected to the mongodb");
    }
    catch(error){
        console.log("error in connecting the database");
    }
}
module.exports =  CreateDataBase_Connection;