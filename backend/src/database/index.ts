import mongoose, { Mongoose } from "mongoose";

export const createConnection = async (): Promise<Mongoose> =>
  mongoose.connect("mongodb://localhost:27017/devradar" as string, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

export const closeConnection = (): Promise<void> => mongoose.connection.close();