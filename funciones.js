//Funcion que realiza la simplificación
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

    if (mcd === 1) {
        return {
            success: false
        }
    } else {
        // Simplifica la fracción dividiendo ambos números por el MCD
        const numeradorSimplificado = numerador / mcd;
        const denominadorSimplificado = denominador / mcd;

        // Devuelve los valores simplificados como un objeto
        return {
            success: true,
            mcd: mcd,
            numerador: numeradorSimplificado,
            denominador: denominadorSimplificado
        };
    }
}