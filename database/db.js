import mongoose from "mongoose";

const dbConnection = async() => {
    const DB_URI = "mongodb+srv://salvichaitrali14:codeforinterview@job-portal.v0aufjn.mongodb.net/";
    try{
        await mongoose.connect(DB_URI, { useUnifiedTopology: true});
        console.log("Database connected successfully");
    } catch(error){
        console.log('Error while connecting with the database', error.message);

    }

}

export default dbConnection;