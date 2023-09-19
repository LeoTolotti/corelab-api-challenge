import express from "express";
import cors from "cors";
import rotas from "./rotas.js";
import db from "./bancodedados/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/", rotas);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
