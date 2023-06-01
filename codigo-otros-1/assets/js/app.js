/*
  Este programa JavaScript obtiene datos de la API de GitHub para un usuario específico
  y muestra su nombre, blog y ubicación en una página web. Si hay un error al obtener
  los datos, mostrará un mensaje de error en su lugar.
*/

const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector(".name"); // . to target class name on 7, 8, 9
const $b = document.querySelector(".blog");
const $l = document.querySelector(".location");

async function displayUser(username) {
  // missing async for await
  $n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // retrieve response as .json format
  console.log(data);
  $n.textContent = `${data.name}`; // 12, 13, 14 incorrect. Usage of ``
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski")
  .then((data) => console.log(data)) // added .then (previously only .catch) and print to console data
  .catch(handleError);
