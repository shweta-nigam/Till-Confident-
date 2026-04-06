import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/myapp",
    );

    //mongoose.connect() does NOT return raw MongoDB connection
// It returns a Mongoose instance (mongoose object itself)
// so connection === mongoose

    console.log("check what is in inside here ------->", connection); 
    // this connection is huge object with things such as models,schema, connection and plugins


    console.log(connection.connection) // actual DB connection is inside this
    console.log("Connected to DB:", connection.connection.host); // ?? -- where db is running -- 127.0.0.1
    console.log(connection.connection.db); // ?? -- native MongoDB database object
    console.log("Database name:", connection.connection.name);
  } catch (error) {}
};

export default connectDB;
