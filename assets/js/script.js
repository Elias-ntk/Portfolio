let lastScrollTop = 0; // Mantiene la posición del último scroll  
const navbar = document.querySelector('.navbar');  
 

window.addEventListener('scroll', function() {  
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;  

    // Si se desplaza hacia abajo  
    if (currentScroll > lastScrollTop) {  
        navbar.classList.add('hidden'); // Oculta el nav  
    } else {  
        navbar.classList.remove('hidden'); // Muestra el nav  
    }  
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar que el valor se vuelva negativo  
});