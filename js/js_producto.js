// componente mejorado

const productos = [
    { nombre: "berry", precio: "20", img: "https://i.pinimg.com/1200x/3c/6f/fc/3c6ffc87d57c8b69652a11c3fc396a95.jpg" },
    { nombre: "playera", precio: "2000", img: "https://creativity.mx/wp-content/uploads/2024/06/Playera_azul_hombre-600x600.png" }
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src= "${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});