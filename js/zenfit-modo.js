document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("zenfit-toggle-mode");
  const body = document.body;

  // Cargar preferencia guardada
  if (localStorage.getItem("zenfit-modo") === "claro") {
    body.classList.add("zenfit-light-mode");
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("zenfit-light-mode");
    const esClaro = body.classList.contains("zenfit-light-mode");

    toggleBtn.textContent = esClaro ? "🌙" : "☀️";
    localStorage.setItem("zenfit-modo", esClaro ? "claro" : "oscuro");
  });
});


// Creamos el observador
const revelarObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Si el elemento entra en la pantalla
    if (entry.isIntersecting) {
      // Le agregamos la clase que lo hace visible
      entry.target.classList.add('visible');
      
      // (Opcional) Dejamos de observarlo para que la animación ocurra solo una vez
      revelarObserver.unobserve(entry.target);
    }
  });
}, { 
  // threshold indica qué porcentaje del elemento debe ser visible para activarse (0.15 = 15%)
  threshold: 0.15 
});

// Seleccionamos todos los elementos que tengan la clase 'efecto-revelar'
const elementosOcultos = document.querySelectorAll('.efecto-revelar');

// Le decimos al observador que vigile a cada uno de esos elementos
elementosOcultos.forEach((elemento) => {
  revelarObserver.observe(elemento);
});

