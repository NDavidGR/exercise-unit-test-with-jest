// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); //1 euro son 1.07 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(5.2)).toBe(760.55); //1 dolar son 146.26 yens, entonces 5.2 dolares deberian ser = (5.2 * 146.26)
})

test("One yen should be 0.05 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1000)).toBe(50); //1 yen son 0.05 Pounds, entonces 1000 yens deberian ser = (1000 * 0.05)
})