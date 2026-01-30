const express = require("express");
const app = express();
const cors = require("cors");

// peticiones desde cualquier sitio con cors
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
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`,
    );
    // aqui devolvemos el primer resulto encontrado
    res.json(response.data.results[0]);
  } catch (error) {
    res.status(404).json({ message: "Personaje no encontrado" });
  }
});

app.listen(3000, () => {
  console.log("Escuchando en el puerto http://localhost:3000");
});
