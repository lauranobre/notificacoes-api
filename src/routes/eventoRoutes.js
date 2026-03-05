const express = require("express");
const router = express.Router();
const EventoController = require("../controllers/EventoController");

router.get("/", EventoController.index); // GET /eventos
router.get("/:id", EventoController.show); // GET /eventos/:id
router.post("/", EventoController.store); // POST /eventos
router.put("/:id", EventoController.update); // PUT /eventos/:id
router.delete("/:id", EventoController.destroy); // DELETE /eventos/:id

/* Explicação: 
- O index exibe a lista de eventos.
- O show exibe um evento específico com base no ID.
- O store cria um novo evento.
- O update atualiza um evento existente com base no ID.
- O destroy exclui um evento com base no ID.
*/
module.exports = router;