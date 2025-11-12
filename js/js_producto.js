// componente mejorado

const productos = [
    { nombre: "Berry", precio: "$20", img: "https://i.pinimg.com/1200x/3c/6f/fc/3c6ffc87d57c8b69652a11c3fc396a95.jpg" },
    { nombre: "Peluche", precio: "$6000", img: "https://i.pinimg.com/736x/de/a1/aa/dea1aa7206951ff1be8bceda3b2675cb.jpg" },
    { nombre: "Gato", precio: "$10000", img: "https://i.pinimg.com/736x/00/70/c5/0070c514bbd12b0599cd231f547062d9.jpg" },
    { nombre: "Cámara", precio: "$23000", img: "https://i.pinimg.com/736x/2e/ee/7e/2eee7e1dc04fde1794b294fea115a353.jpg" },
    { nombre: "CD", precio: "$15", img: "https://i.pinimg.com/736x/2f/71/8a/2f718a2322fcbc81b0297c11c0d6af09.jpg" }
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