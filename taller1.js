//Punto 1
function convertidorTemp(C){
    return C*(9/5)+32
}

//Punto 2
function resolvedor(a, b, c, positivo=true){
    let discriminante = Math.sqrt(b * b - 4 * a * c);
    return positivo ? (-b + discriminante) / (2 * a) : (-b - discriminante) / (2 * a);
}

//Punto 3
function mejorParidad(num){
    return num % 2 === 0;
}


//Punto 4
function peorParidad(num){
    switch(num) {
        case 2: case 4: case 6: case 8: case 10:
            return true;
        default:
            return false;
    }
}