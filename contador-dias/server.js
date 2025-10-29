// server.js
import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// data de início (substitua pela que quiser)
const dataInicio = new Date("2025-04-27");

// função que calcula dias passados
function diasDesdeInicio() {
  const agora = new Date();
  const diff = agora - dataInicio;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

// rota que devolve o número de dias
app.get("/contador", (req, res) => {
  res.json({ dias: diasDesdeInicio() });
});

// servir arquivos estáticos (index.html, etc)
app.use(express.static(path.join(process.cwd(), "public")));

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
