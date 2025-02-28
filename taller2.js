// Punto 1
function findMax(numbers) {
    if (!numbers?.length) return null; 
    let max = numbers[0] ?? - Infinity;
    for (let i = 1; i < numbers.length; i++) {
        max = numbers[i] > max ? numbers[i] : max; 
    }
    return max;
}

// Punto 2
function includes(numbers, num) {
    if (!numbers?.length) return false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === num) return true;
    }  
    return false;
}

// Punto 3
function sum(numbers) {
    if (!numbers?.length) return 0;
    let total = 0;
    for (let num of numbers) {
        total += num ?? 0; 
    }   
    return total;
}

// Punto 4
function missingNumbers(numbers) {
    if (!numbers?.length) return [];
    let min = numbers[0], max = numbers[0];
    for (let num of numbers) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    let missing = [];
    for (let i = min; i <= max; i++) {
        if (!includes(numbers, i)) missing.push(i);
    }
    return missing;
}
