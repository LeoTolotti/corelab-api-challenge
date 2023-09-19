import { Router } from "express";
import tarefaControle from "./controle/tarefaControle.js";
const rotas = new Router();

rotas.get("/tarefas", tarefaControle.index);
rotas.get("/tarefas/:texto", tarefaControle.indexTarefa);
rotas.post("/tarefas", tarefaControle.create);
rotas.post("/tarefas/:_id/favorito", tarefaControle.atualizaFavorito);
rotas.post("/tarefas/:_id/titulo", tarefaControle.atualizaTitulo);
rotas.post("/tarefas/:_id/texto", tarefaControle.atualizaTexto);
rotas.post("/tarefas/:_id/cor", tarefaControle.atualizaCor);
rotas.delete("/tarefas/:_id", tarefaControle.delete);

export default rotas;
