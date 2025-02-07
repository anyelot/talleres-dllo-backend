//Punto 1
function convertidorTemp(C){
    return C*(9/5)+32
}

//Punto 2
function resolvedor(a, b, c, signo){
    const x = Math.sqrt(b * b - 4 * a * c)
    if (signo == "+"){
        return (-b + x) / (2 * a)
    }else{
        return (-b - x) / (2 * a)
    }   
}

//Punto 3
function mejorParidad(num){
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
}


//Punto 4
function peorParidad(num){
    num = 1
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 2
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 3
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 4
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 5
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 6
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 7
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 8
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 9
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
    num = 10
    if (num % 2 == 0){
        return true
    }else{
        return false
    }
}