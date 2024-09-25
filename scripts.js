
//1
// Seleccionar todos los enlaces de la página
const enlaces = document.querySelectorAll('a');
//añadir evento a cada enlace
enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace lleve a otra página
      
    });
});
// 2.1
//Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const imagenes = document.getElementsByTagName("img");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function () {
    imagenes[i].setAttribute("src", `./assets/${getRandom(gifs)}`);
  });
}
//2.2
//Cambia el color del texto y el de fondo por uno cualquiera.
const parrafos = document.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("click", function () {
    parrafos[i].style.background = getRandom(misColores);
    parrafos[i].style.color = "red";
  });
}
//2.3
//Bloques de article o section: Cambia el color de fondo.
const articulos = document.querySelectorAll("article");
for (let i = 0; i < articulos.length; i++) {
  articulos[i].addEventListener("click", function () {
    articulos[i].style.background = "grey";
  });
}
//3
//3.1
let valores = [];
for (let i = 0; i < imagenes.length; i++) {
  valores.push(imagenes[i].src);
}

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseover", function () {
    imagenes[i].setAttribute("src", "./assets/abracadabra.gif");
  });
}
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("mouseout", function () {
    imagenes[i].setAttribute("src", valores[i]);
  });
}
//3.2
// Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseover", function () {
      parrafos[i].style.background = "green";
      parrafos[i].style.color = "yellow";
    });
  }
  for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("mouseout", function () {
      parrafos[i].style.background = "white";
      parrafos[i].style.color = "black";
    });
  }
  //3.3
  // Bloques de article o section: Color de fondo distinto al de párrafo.
for (let i = 0; i < articulos.length; i++) {
    articulos[i].addEventListener("mouseover", function () {
      articulos[i].style.background = "blue";
    });
  }
  for (let i = 0; i < articulos.length; i++) {
    articulos[i].addEventListener("mouseout", function () {
      articulos[i].style.background = "orange";
    });
  }
  const colors = ["red", "blue", "green"];
  const misColores = ["#214E34", "#1216FF", "#fca311", "#F0F2A6", "#41EAD4"];
  const gifs = [
    "abracadabra.gif",
    "magic-1.gif",
    "magic-2.gif",
    "magic-3.gif",
    "magic-4.gif",
    "magic-5.gif",
    "magic-6.gif",
  ];
  
  function getRandom(array) {
    let aleatorio = Math.floor(Math.random() * array.length);
  
    return array[aleatorio];
  }




//primer intento
/*
//2.1
window.onload = function() {
    const imagenes = document.querySelectorAll('img'); // Selecciona todas las imágenes
    imagenes.forEach(img => {
        img.src = 'assets/magic-3.gif'; // Sustituye cada imagen por el GIF
        img.alt = 'GIF'; // Cambia el texto alternativo (opcional)
    });
};
//2.2
// Selecciona todos los párrafos de la página
let parrafos = document.querySelectorAll("p");

// Recorre cada párrafo y aplica los nuevos estilos
parrafos.forEach(function(parrafo) {
    parrafo.style.color = "red";  // Cambia el color del texto a blanco
    parrafo.style.backgroundColor = "green";  // Cambia el color de fondo a azul
});
//2.3
let section = document.querySelectorAll("article");
section.forEach(function(section) {
    section.style.backgroundColor = "blue";
    
});

//3.1
//Esto es lo que logre hacer... :(
const imagenes = document.querySelectorAll('img'); // Selecciona todas las imágenes
console.log(imagenes[0].src)
imagenes.forEach(img => {
    const originalSrc = "img.src"; // Guarda la ruta original

    img.addEventListener('mouseenter', function() {
        img.src = 'assets/abracadabra.gif'; // Cambia la imagen por el GIF
    });

    img.addEventListener('mouseleave', function() {
        img.src = imagenes[0].src; // Vuelve a la imagen original
    });
});
//3.2
*/




