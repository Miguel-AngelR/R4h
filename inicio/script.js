// Obtén todos los inputs de tipo radio (las estrellas)
const ratingInputs = document.querySelectorAll('.rating input');

// Cuando se selecciona una estrella, imprime el valor de la calificación
ratingInputs.forEach(input => {
    input.addEventListener('change', function() {
        // El valor seleccionado se muestra en la consola
        const selectedRating = this.value;
        console.log("Calificación seleccionada: " + selectedRating + " estrella(s)");

        // Aquí puedes añadir código para manejar la calificación, como guardarla o enviarla al servidor.
    });
});