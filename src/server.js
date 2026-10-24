import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); // <--- Indispensable pour lire req.body !

app.post('/api/login', (req, res) => {
  // Extraction des données envoyées par React
  const { username, password } = req.body;

  // C'EST CETTE PARTIE QUI S'AFFICHE DANS VS CODE :
  console.log("\n====================================");
  console.log("🔥 LES DONNÉES SONT ARRIVÉES DANS VS CODE 🔥");
  console.log("Username :", username);
  console.log("Password :", password);
  console.log("====================================\n");

  res.json({ status: 'ok' });
});

app.listen(5000, () => {
  console.log("Serveur backend lancé sur http://localhost:5000");
});