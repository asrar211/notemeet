import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI!;

if(!MONGODB_URI) {
    throw new Error("MongoDB Uri is required, check .env");
}

let cached = global.mongoose;

if(!cached) {
    cached = global.mongoose = {conn: null, promise: null};
}

async function DBConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            maxPoolSize: 10
        } as mongoose.ConnectOptions;

        cached.promise = mongoose
            .connect(MONGODB_URI, opts)
            .then((m) => m.connection);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default DBConnect;