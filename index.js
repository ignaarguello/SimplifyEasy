function simplificarFraccion(numerador, denominador) {
    // Calcula el MCD (máximo común divisor) usando el algoritmo de Euclides
    function calcularMCD(a, b) {
        if (b === 0) {
            return a;
        } else {
            return calcularMCD(b, a % b);
        }
    }

    // Calcula el MCD de los dos números
    const mcd = calcularMCD(numerador, denominador);
    console.log('MCD Encontrado:', mcd)

    // Simplifica la fracción dividiendo ambos números por el MCD
    const numeradorSimplificado = numerador / mcd;
    const denominadorSimplificado = denominador / mcd;

    // Devuelve los valores simplificados como un objeto
    return {
        numerador: numeradorSimplificado,
        denominador: denominadorSimplificado
    };
}

// Ejemplo de uso:
const fraccionOriginal = simplificarFraccion(50, 65);
console.log("Fracción original:", fraccionOriginal.numerador, "/", fraccionOriginal.denominador);

