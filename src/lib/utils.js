import mongoose from "mongoose";
const connection = {};
const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.Connection[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
export default connectToDb;