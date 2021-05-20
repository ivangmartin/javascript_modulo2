
var hoteles = {
    Center: {
        name: "Center",
        location: "Madrid",
        img: "hotel1.jpeg",
    },
    Palace: {
        name: "Palace",
        location: "Granada",
        img: "hotel2.jpeg",
    },

};

var stars = {
    una:
        "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
        "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};


var selectedHotel = prompt(
    "¿Sobre que Hotel quiere realizar Reseña? ¿Palace o Center?",
);

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

document.getElementById("anonymous").checked = confirm("¿Pulsa aceptar si quieres que la reseña sea anonima?");

document.getElementById("name-hotel").innerHTML =
    "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;


document.getElementById("rating").innerHTML = stars[rating];


