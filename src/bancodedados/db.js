import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro na conexão com o MongoDB:"));
db.once("open", () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso!");
});

export default db;
