async function getCharacter() {
  console.log("¡Botón clickeado!");
  const name = document.getElementById("charInput").value;
  const cardDiv = document.getElementById("characterCard");

  if (!cardDiv) {
    console.error(
      "Error: no se encontró el elemento (characterCard) en el HTML",
    );
    return;
  }
  if (!name) {
    return alert("Escribe un nombre");
  }

  try {
    const response = await fetch(`http://localhost:3000/characters/${name}`);

    if (!response.ok) throw new Error("No encontrado");

    const data = await response.json();
    cardDiv.innerHTML = `
        <img src="${data.image}" alt="${data.name}">
        <div class="info-text">
            <h2></h2>
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Species:</strong> ${data.species}</p>
            <p><strong>Gender:</strong> ${data.gender}</p>
            <p><strong>Origin:</strong> ${data.origin.name}</p>
        </div>
    `;
  } catch (error) {
    cardDiv.innerHTML = `<p style="color: #ff9800;">Error: El personaje no existe.</p>`;
  }
}
