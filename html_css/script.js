// script.js

document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.card');

    // 1. Definimos la animación de aparición al hacer scroll (Intersection Observer)

    // Opciones: Activamos la animación cuando el 10% del elemento es visible
    const observerOptions = {
        root: null, // Observamos contra el viewport (la ventana del navegador)
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la tarjeta está a la vista, le añadimos la clase 'is-visible'
                entry.target.classList.add('is-visible');
                // Dejamos de observar la tarjeta una vez que ha aparecido
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Empezamos a observar todas las tarjetas que existen en la página
    cards.forEach(card => {
        observer.observe(card);
    });

    // 2. (Opcional) Interactividad simple para la consola del navegador
    console.log("Script de transiciones de tarjetas cargado y ejecutándose.");
});

