//Variable del contenedor 'Resultado'
const contenedor_resultado = document.querySelector('#contenedor-resultado');

const ultima_operacionInLocalStorage = localStorage.getItem('ultima-operacion')
if (ultima_operacionInLocalStorage === null) {
    contenedor_resultado.innerHTML = `
    <h2 id='titulo-NoOperacionesRecientes'>No hubo operaciones recientes...</h2>
    `
}

//Captamos los valores de los inputs y agregarmos eventos a botones:
const btn_simplificar = document.querySelector('#btn-simplificar');

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
        <h2 id='titulo-mcd-js'>MCD Encontrado: ${fraccionSimplificada.mcd}</h2>
        <div id='contenedor-frac-simplificada-js'>
            <h2 id='titulo-fraSimplificada'>Fracción Simplificada = </h2>
            <div id='fraccion-simplificada-final-js'>
                <h4 class='number-fraccion'>${fraccionSimplificada.numerador}</h4>
                <h4 class='number-fraccion'>${fraccionSimplificada.denominador}</h4>
            </div>
        </div>`
    } else {
        contenedor_resultado.innerHTML = `
        <h2>Error. No pudo simplificarse la fracción.</h2>
        `
    }
}

btn_simplificar.addEventListener('click', obtener_valores_inputs)


