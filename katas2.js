// comece a criar a sua função add na linha abaixo
function add (a , b){
    let resultSum = a + b
     return resultSum
 }
  console.log(add(2 , 4))

// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (c , d){
    
    let resultMultiply = 0;
    for (let i = 0 ; i < d; i++ ){
       resultMultiply = add(resultMultiply, c)
    
    }
    return resultMultiply
}
console.log(multiply(6, 8))

// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power (e , f){
    let resultPower = 1
    for (let i = 0; i < f; i++) {
       resultPower = multiply (resultPower, e)
    }
    return resultPower
}
console.log(power(10 , 2))

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (g){
    let resultFactorial = 1
    for (let i = g ; i > 1; i--){
        resultFactorial = multiply (resultFactorial,i)
        
    }
    return resultFactorial
}
console.log(factorial(4))

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');
// ...///

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
