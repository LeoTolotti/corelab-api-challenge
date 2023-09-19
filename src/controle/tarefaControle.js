import Tarefas from "../modelos/tarefas.js";

class TarefaControle {
  async index(req, res) {
    try {
      const tarefas = await Tarefas.find();
      return res.json(tarefas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async indexTarefa(req, res) {
    try {
      const { texto } = req.params;
      const tarefas = await Tarefas.find({
        titulo: {
          $regex: new RegExp(texto, "i"),
        },
      });
      return res.json(tarefas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { titulo, texto, cor, favorito } = req.body;
      const novaTarefa = await Tarefas.create({
        titulo,
        texto,
        cor,
        favorito,
      });
      return res.status(201).json(novaTarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async update(req, res) {
    try {
      const { _id, titulo, texto, cor, favorito } = req.body;
      const tarefa = await Tarefas.findOne({ _id });
      if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      const updateTarefa = await Tarefas.update({
        titulo: titulo,
        texto: texto,
        cor: cor,
        favorito: favorito,
      });
      return res.status(201).json(updateTarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async atualizaFavorito(req, res) {
    try {
      const { _id } = req.params;
      const { favorito } = req.body;
      const tarefa = await Tarefas.findOne({ _id });
      if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      tarefa.favorito = favorito;
      await tarefa.save();
      return res.status(201).json(tarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async atualizaTitulo(req, res) {
    try {
      const { _id } = req.params;
      const { titulo } = req.body;
      const tarefa = await Tarefas.findOne({ _id });
      if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      tarefa.titulo = titulo;
      await tarefa.save();
      return res.status(201).json(tarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async atualizaTexto(req, res) {
    try {
      const { _id } = req.params;
      const { texto } = req.body;
      const tarefa = await Tarefas.findOne({ _id });
      if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      tarefa.texto = texto;
      await tarefa.save();
      return res.status(201).json(tarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async atualizaCor(req, res) {
    try {
      const { _id } = req.params;
      const { cor } = req.body;
      const tarefa = await Tarefas.findOne({ _id });
      if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      tarefa.cor = cor;
      await tarefa.save();
      return res.status(201).json(tarefa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
  async delete(req, res) {
    try {
      const { _id } = req.params;
      const tarefa = await Tarefas.findOne({ _id });
      if (!tarefa) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }
      await Tarefas.deleteOne({ _id: tarefa._id });
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}
export default new TarefaControle();
