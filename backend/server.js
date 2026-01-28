const express = require("express");
const app = express();
const cors = require("cors")

// peticiones desde cualquier sitio con cors
app.use(cors())

