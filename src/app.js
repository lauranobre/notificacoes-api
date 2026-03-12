// src/app.js
const express = require("express");
const app = express();

// Middleware para ler JSON no body das requisições
app.use(express.json());

// Importar rotas
const eventoRoutes = require("./routes/eventoRoutes");
const participanteRoutes = require("./routes/participanteRoutes");
const inscricaoRoutes = require("./routes/inscricaoRoutes");
//DESAFIO
const InscricaoController = require('./controllers/InscricaoController');

// Usar as rotas com prefixo
app.use("/eventos", eventoRoutes);
app.use("/participantes", participanteRoutes);
app.use("/inscricoes", inscricaoRoutes);
//DESAFIO
app.get('/inscricoes/:id/detalhes', InscricaoController.obterDetalhes);

// Rota raiz (informativa)
app.get("/", (req, res) => {
    res.json({ 
        mensagem: "API de Notificações",
        rotas: {
            eventos: "/eventos",
            participantes: "/participantes",
            inscricoes: "/inscricoes"
        },
    });
});

module.exports = app;