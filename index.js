//Captamos los valores de los inputs y agregarmos eventos a botones:
const btn_simplificar = document.querySelector('#btn-simplificar');
const contenedor_resultado = document.querySelector('#contenedor-resultado');

const obtener_valores_inputs = (e) => {
    e.preventDefault()
    //Captamos el valor de los Input:
    const input_numerador = document.querySelector('#input-numerador').value;
    const input_denominador = document.querySelector('#input-denominador').value;
    //Invocamos la funcion externa que simplifica:
    const fraccionSimplificada = simplificarFraccion(input_numerador, input_denominador);
    //Realizamos el condicional que imprime en pantalla los resultados:
    if (fraccionSimplificada.success === true) {
        contenedor_resultado.innerHTML = `
        <h2>MCD Encontrado: ${fraccionSimplificada.mcd}</h2>
        <div id='contenedor-frac-simplificada-js'>
            <h2>Fracción Simplificada:</h2>
            <div id='fraccion-simplificada-final-js'>
                <h4>${fraccionSimplificada.numerador}</h4>
                <hr id='hr-frac-simpli-final'>
                <h4>${fraccionSimplificada.denominador}</h4>
            </div>
        </div>`
    } else {
        contenedor_resultado.innerHTML = `
        <h2>Error. No pudo simplificarse la fracción.</h2>
        `
    }
}

btn_simplificar.addEventListener('click', obtener_valores_inputs)


