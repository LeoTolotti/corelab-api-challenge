import mongoose, { mongo } from "mongoose";

const tarefaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: true,
    },
    cor: {
      type: String,
      required: true,
    },
    favorito: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tarefa", tarefaSchema);
