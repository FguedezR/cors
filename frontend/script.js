async function getCharacter() {
  const name = document.getElementById("charInput").value;
  const carDiv = document.getElementById("characterCard");

  if (!name) {
    return alert("Escribe un nombre");
  }
  try {
    const response = await fetch(`http://localhost:3000/characters/${name}`);
    if (!response.ok) throw new Error("No encontrado");
    const data = await response.json();
    carDiv.innerHTML = `
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
    carDiv.innerHTML = `<p style="color: #ff9800;">Error: El personaje no existe.</p>`;
  }
}
