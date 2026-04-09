const btninicio = document.getElementById("btn-inicio");
const btnacerca = document.getElementById("btn-acerca");
const btnayuda = document.getElementById("btn-ayuda");

btninicio.addEventListener("click", function(){
    document.getElementById("INICIO").scrollIntoView({behavior:"smooth"});
});

btnacerca.addEventListener("click", function(){
    document.getElementById("ACERCA").scrollIntoView({behavior:"smooth"});
});

btnayuda.addEventListener("click", function(){
    document.getElementById("AYUDA").scrollIntoView({behavior:"smooth"});
});