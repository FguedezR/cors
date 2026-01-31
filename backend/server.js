const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const PORT = 3000;

// peticiones con cors
app.use(cors());

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character",
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener personajes" });
  }
});

app.get("/characters/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const response = await axios.get(url);
    // vemos si hay resultados antes de enviar el primero
    if (response.data.results && response.data.results.length > 0) {
      res.json(response.data.results[0]);
    } else {
      res.status(404).json({ message: "No se encontraron personajes" })
    }
  } catch (error) {
    res.status(404).json({ message: "Personaje no encontrado" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor en el puerto http://localhost:${PORT}`);
});