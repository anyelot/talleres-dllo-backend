// Punto 1
function desglosarString(texto, tipo) {
    if (!texto) return 0; 
    const vocales = [..."aeiouAEIOU"];
    const caracteres = [...texto];
    const resultado = caracteres.filter((char) =>
        tipo === "vocales" ? vocales.includes(char) : !vocales.includes(char)
    );

    return resultado.length;
}

// Punto 2
function twoSum(numeros, objetivo) {
    for (let i = 0; i < numeros.length; i++) {
        let indice = numeros.findIndex(
            (num, idx) => idx !== i && num + numeros[i] === objetivo
        );
        if (indice !== -1) return [i, indice];
    }
    return [];
}

// Punto 3
function conversionRomana(romano) {
    const valores = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    const caracteres = [...romano];

    return caracteres.reduce((total, char, i, arr) => {
        let actual = valores[char];
        let siguiente = valores[arr[i + 1]] ?? 0;
        return actual < siguiente ? total - actual : total + actual;
    }, 0);
}