player_name = localStorage.getItem("player_name");

// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);
// contar el número de intentos
var guess = 1;
// crear para el intento correcto

  
// función para el número adivinado por el usuario
function submit(){
    var x = document.getElementById("guessField").value;
    if (x == y){
    alert("felicitaciones " + player_name + ", lo adivinaste bien");
    guess = 1;
    }
    else if (x > y){
        guess++;
        alert("Ups, lo siento, intenta con un numero más pequeño")
    }
    else{
        guess++;
        alert("Ups, lo siento, intenta con un numero más grande")
    }
}     

function playAgain(){
    document.getElementById("guessField").value = "";
    y = Math.floor(Math.random() * 10 + 1);
}
