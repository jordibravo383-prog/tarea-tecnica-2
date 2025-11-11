//...........................BLOQUE 1: Ejercicios con Objetos Individuales...........................

/* 1. Serie de Fibonacci de un objeto número

Descripción:
Generar los primeros n términos de la serie de Fibonacci, donde n está almacenado en el
atributo numero.

Entrada:
objeto = {"numero": 8}

Proceso:
1. Tomar objeto["numero"].
2. Iniciar con 0 y 1.
3. Cada nuevo valor se calcula: nuevo = anterior + actual.
4. Repetir hasta obtener n términos.

Ejemplo paso a paso:
0, 1 → 1
1, 1 → 2
1, 2 → 3
2, 3 → 5
3, 5 → 8

Salida:
Serie de Fibonacci (8 términos): 0, 1, 1, 2, 3, 5, 8, 13 */
function Ejercicio1 (){
let objeto = { numero: 8 }

let n = objeto.numero
let fibonacci = []

let a = 0, b = 1

for (let i = 0; i < n; i++) {
  fibonacci.push(a)
  let temp = a;
   a = b;
   b = temp + b;
}

console.log(`Serie de Fibonacci (${n} términos): ${fibonacci.join(", ")}`)
}
Ejercicio1()

/* 2. Divisores de un número (objeto)

Descripción:
Mostrar todos los divisores del atributo numero.

Entrada:
objeto = {"numero": 12}

Proceso:
1. Recorrer del 1 al número.
2. Si numero % i == 0, agregarlo a la lista de divisores.

Salida:
Divisores de 12: 1, 2, 3, 4, 6, 12 */
function Ejercicio2(){
    let objeto = {"numero": 12} 

    let n = objeto.numero
    let divisores = []

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores.push(i)
        }
    }

    console.log(`Divisores de ${n}: ${divisores.join(", ")}`)
}
Ejercicio2()

/* 3. Suma de los divisores de un número

Descripción:
Calcular la suma total de los divisores positivos del atributo numero.

Entrada:
objeto = {"numero": 12}

Proceso:
1. Buscar los divisores de numero.
2. Sumar todos los divisores encontrados.

Ejemplo:
1 + 2 + 3 + 4 + 6 + 12 = 28

Salida:
Suma de divisores: 28 */
function Ejercicio3(){
 let objeto = {"numero": 12}
    let n = objeto.numero
    let sumaDivisores = 0

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sumaDivisores += i
        }
    }

    console.log(`Suma de divisores de ${n}: ${sumaDivisores}`)
}
Ejercicio3()

/*4. Verificar si el número de un objeto es perfecto

Descripción:
Comprobar si el atributo numero es perfecto.

Entrada:
objeto = {"numero": 6}

Proceso:
1. Calcular los divisores de numero (sin incluirlo).
2. Sumar esos divisores.
3. Si la suma es igual al número, es perfecto.

Ejemplo:
1 + 2 + 3 = 6 → Perfecto

Salida:
El número 6 es perfecto.*/
function Ejercicio4(){
    let objeto = {"numero": 6}
    let n = objeto.numero
    let sumaDivisoresPropios = 0

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sumaDivisoresPropios += i
        }
    }

    if (sumaDivisoresPropios === n) {
        console.log(`El número ${n} es perfecto.`)
    } else {
        console.log(`El número ${n} NO es perfecto (Suma de divisores propios: ${sumaDivisoresPropios}).`)
    }
}
Ejercicio4()

/*5. Verificar si el número es primo

Descripción:
Determinar si el atributo numero solo tiene dos divisores: 1 y él mismo.

Entrada:
objeto = {"numero": 11}

Proceso:
1. Recorrer desde 2 hasta numero - 1.
2. Si algún valor divide exactamente, no es primo.

Salida:
El número 11 es primo.*/
function Ejercicio5(){
    let objeto = {"numero": 11}
    let n = objeto.numero

    if (n <= 1) {
        console.log(`El número ${n} NO es primo.`)
        return
    }
    
    let esPrimo = true

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = false
            break
        }
    }

    if (esPrimo) {
        console.log(`El número ${n} es primo.`)
    } else {
        console.log(`El número ${n} NO es primo.`)
    }
}
Ejercicio5()

/*6. Invertir los dígitos de un número

Descripción:
Mostrar el número invertido.

Entrada:
objeto = {"numero": 1234}

Proceso:
1. Tomar el último dígito con % 10.
2. Formar el nuevo número multiplicando por 10 y sumando.
3. Dividir entre 10 hasta llegar a 0.

Ejemplo:
1234 → 4 → 43 → 432 → 4321

Salida:
Número invertido: 4321*/
function Ejercicio6 (){
    let objeto = {"numero": 1234}
    
    let n = objeto.numero 
    let invertido = 0
    let temp = n 

    while (temp > 0) {
        let digito = temp % 10
        invertido = invertido * 10 + digito
        temp = (temp / 10) | 0 
    }

    console.log(`Número original: ${n}`)
    console.log(`Número invertido: ${invertido}`)
}
Ejercicio6()

/*7. Contar dígitos de un número

Descripción:
Determinar cuántos dígitos tiene el atributo numero.

Entrada:
objeto = {"numero": 9876}

Proceso:
1. Mientras el número sea mayor a 0, dividir entre 10.
2. Aumentar un contador en cada paso.

Salida:
El número 9876 tiene 4 dígitos.*/
function Ejercicio7(){
let objeto = {"numero": 9876}
    let n = objeto.numero
    let contador = 0
    let temp = n

    while (temp > 0) {
        temp = (temp / 10) | 0; 
        contador++
    }

    console.log(`El número ${n} tiene ${contador} dígitos.`)
}
Ejercicio7()

/*8. Factorial de un número

Descripción:
Calcular el factorial del atributo numero.

Entrada:
objeto = {"numero": 5}

Proceso:
1. Iniciar fact = 1.
2. Multiplicar fact = fact × i desde 1 hasta numero.

Ejemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120

Salida:
Factorial de 5 = 120 */
function Ejercicio8(){
let objeto = {"numero": 5}
    let n = objeto.numero
    let factorial = 1 

    for (let i = 1; i <= n; i++) {
        factorial *= i 
    }

    console.log(`Factorial de ${n} = ${factorial}`)
}
Ejercicio8()

/*9. Sumas sucesivas

Descripción:
Realizar sumas repetidas entre el atributo numero y veces.

Entrada:
objeto = {"numero": 3, "veces": 4}

Proceso:
1. Sumar el número tantas veces como indique veces.
2. Acumular el resultado total.

Ejemplo:
3 + 3 + 3 + 3 = 12

Salida:
Resultado: 12*/
function Ejercicio9(){
let objeto = {"numero": 3, "veces": 4}
    let numero = objeto.numero
    let veces = objeto.veces
    let resultado = 0

    for (let i = 0; i < veces; i++) {
        resultado += numero
    }

    console.log(`Suma repetida de ${numero} por ${veces} veces: ${resultado}`)
    console.log(`Resultado: ${resultado}`)
}
Ejercicio9()

/*10. Restas sucesivas

Descripción:
Restar un número (numero2) repetidamente al atributo numero hasta llegar a 0 o menos.

Entrada:
objeto = {"numero": 15, "numero2": 4}

Proceso:
1. Mientras el número sea mayor que 0, restar numero2.
2. Mostrar el resultado final.

Ejemplo:
15 − 4 − 4 − 4 = 3

Salida:
Resultado final: 3 */
function Ejercicio10(){
    let objeto = {"numero": 15, "numero2": 4}
    let numero = objeto.numero
    let numero2 = objeto.numero2
    let temp = numero 

    while (temp >= numero2) {
        temp -= numero2
    }
    
    let resultado = temp

    console.log(`Operación: ${numero} dividido por ${numero2} (mediante restas sucesivas)`)
    console.log(`Resultado final: ${resultado}`)
}
Ejercicio10()

//...........................BLOQUE 2: Colección de Objetos (Listas de Números)...........................

/*1. Serie de Fibonacci para varios objetos
Entrada:
numeros = [{"numero": 5}, {"numero": 8}, {"numero": 10}]
Proceso:
• Para cada objeto, generar la serie de Fibonacci hasta numero.
Salida:
5 → 0, 1, 1, 2, 3
8 → 0, 1, 1, 2, 3, 5, 8, 13
10 → 0, 1, 1, 2, 3, 5, 8, 13, 21, 34*/
function Ejercicio11(){
let numeros = [{"numero": 5}, {"numero": 8}, {"numero": 10}]

    for (let i = 0; i < numeros.length; i++) {
        let objeto = numeros[i]
        let n = objeto.numero
        let fibonacci = []
        let a = 0, b = 1

        for (let j = 0; j < n; j++) {
            fibonacci.push(a)
            let temp = a;
            a = b;
            b = temp + b;
        }

        console.log(`${n} → ${fibonacci.join(", ")}`)
}
}
Ejercicio11()

/*2. Divisores de varios objetos

Entrada:
numeros = [{"numero": 6}, {"numero": 10}, {"numero": 15}]

Proceso:
• Para cada objeto, calcular sus divisores.

Salida:
6 → 1, 2, 3, 6
10 → 1, 2, 5, 10
15 → 1, 3, 5, 15 */
function Ejercicio12(){
 let numeros = [{"numero": 6}, {"numero": 10}, {"numero": 15}]

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let divisores = []

        for (let j = 1; j <= n; j++) {
            if (n % j === 0) {
                divisores.push(j)
            }
        }
        
        console.log(`${n} → ${divisores.join(", ")}`)
    }
}
Ejercicio12()

/*3. Suma de divisores de varios objetos
Entrada:
numeros = [{"numero": 6}, {"numero": 12}, {"numero": 28}]
Proceso:
• Calcular y sumar los divisores para cada objeto.
Salida:
6 → 12
12 → 28
28 → 56*/ 
function Ejercicio13(){
    let numeros = [{"numero": 6}, {"numero": 12}, {"numero": 28}]

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let sumaDivisores = 0

        for (let j = 1; j <= n; j++) {
            if (n % j === 0) {
                sumaDivisores += j
            }
        }
        
        console.log(`${n} → ${sumaDivisores}`)
    }
}
Ejercicio13() 

/*4. Detectar números perfectos

Entrada:
numeros = [{"numero": 6}, {"numero": 10}, {"numero": 28}, {"numero": 30}]

Proceso:
• Comparar cada numero con la suma de sus divisores.

Salida:
Números perfectos: 6, 28 */
function Ejercicio14(){
    let numeros = [{"numero": 6}, {"numero": 10}, {"numero": 28}, {"numero": 30}]
    let perfectos = []

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let sumaDivisoresPropios = 0

        for (let j = 1; j < n; j++) {
            if (n % j === 0) {
                sumaDivisoresPropios += j
            }
        }
        
        if (sumaDivisoresPropios === n) {
            perfectos.push(n)
        }
    }

    console.log(`Números perfectos: ${perfectos.join(", ")}`)
}
Ejercicio14()

/*5. Números primos en una lista de objetos
Entrada:
numeros = [{"numero": 5}, {"numero": 6}, {"numero": 7}, {"numero": 8}, {"numero": 11}]
Proceso:
• Para cada numero, verificar si tiene solo dos divisores.
Salida:
Primos: 5, 7, 11  */
function Ejercicio15(){
    let numeros = [{"numero": 5}, {"numero": 6}, {"numero": 7}, {"numero": 8}, {"numero": 11}]
    let primos = []

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let esPrimo = true
        
        if (n <= 1) {
            esPrimo = false
        } else {
    
            for (let j = 2; j < n; j++) {
                if (n % j === 0) {
                    esPrimo = false
                    break 
                }
            }
        }

        if (esPrimo) {
            primos.push(n)
        }
    }

    console.log(`Primos: ${primos.join(", ")}`)
}
Ejercicio15()

/*6. Invertir los números de varios objetos
Entrada:
numeros = [{"numero": 123}, {"numero": 456}, {"numero": 780}]
Proceso:
• Extraer los dígitos y mostrarlos en orden inverso.
Salida:
123 → 321
456 → 654
780 → 87 */
function Ejercicio16(){
    let numeros = [{"numero": 123}, {"numero": 456}, {"numero": 780}]

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let original = n
        let invertido = 0
        
        for (let temp = n; temp > 0; temp = (temp / 10) | 0) {
           
            let digito = temp % 10
            invertido = invertido * 10 + digito

        }
        
        console.log(`${original} → ${invertido}`)
    }
}
Ejercicio16()

/*7. Contar dígitos de varios objetos
Entrada:
numeros = [{"numero": 45}, {"numero": 678}, {"numero": 12345}]
Proceso:
• Dividir cada número entre 10 y contar las iteraciones.
Salida:
45 → 2 dígitos
678 → 3 dígitos
12345 → 5 dígitos */
function Ejercicio17(){
    let numeros = [{"numero": 45}, {"numero": 678}, {"numero": 12345}]

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let original = n
        let contador = 0
        let temp = n

        while (temp > 0) {
            temp = (temp / 10) | 0; 
            contador++
        }
        
        console.log(`${original} → ${contador} dígitos`)
    }
}
Ejercicio17()

/*8. Factorial de varios objetos
Entrada:
numeros = [{"numero": 3}, {"numero": 4}, {"numero": 5}]
Proceso:
• Multiplicar todos los enteros desde 1 hasta numero.
Ejemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120
Salida:
3! = 6
4! = 24
5! = 120 */
function Ejercicio18(){
    let numeros = [{"numero": 3}, {"numero": 4}, {"numero": 5}]

    for (let i = 0; i < numeros.length; i++) {
        let n = numeros[i].numero
        let factorial = 1 
        
        for (let j = 1; j <= n; j++) {
            factorial *= j
        }
        
        console.log(`${n}! = ${factorial}`)
    }
}
Ejercicio18()

/* 9. Sumas sucesivas en varios objetos
Entrada:
numeros = [
 {"numero": 2, "veces": 4},
 {"numero": 3, "veces": 4},
 {"numero": 4, "veces": 4}
]
Proceso:
• Repetir la suma de cada numero tantas veces como indique veces.
Salida:
2 × 4 = 8
3 × 4 = 12
4 × 4 = 16*/
function Ejercicio19(){
    let numeros = [
        {"numero": 2, "veces": 4},
        {"numero": 3, "veces": 4},
        {"numero": 4, "veces": 4}
    ]

    for (let i = 0; i < numeros.length; i++) {
        let { numero, veces } = numeros[i]
        let resultado = 0
       
        for (let j = 0; j < veces; j++) {
            resultado += numero
        }
        
        console.log(`${numero} × ${veces} = ${resultado}`)
    }
}
Ejercicio19()

/*10. Restas sucesivas en varios objetos
Entrada:
numeros = [
 {"numero": 15, "numero2": 4},
 {"numero": 22, "numero2": 4},
 {"numero": 30, "numero2": 4}
]
Proceso:
• Restar numero2 sucesivamente a numero hasta que el resultado sea menor.
Salida:
15 → 3
22 → 2
30 → 2 */
function Ejercicio20(){
    let numeros = [
        {"numero": 15, "numero2": 4},
        {"numero": 22, "numero2": 4},
        {"numero": 30, "numero2": 4}
    ]

    for (let i = 0; i < numeros.length; i++) {
        let { numero, numero2 } = numeros[i]
        let temp = numero 

        while (temp >= numero2) {
            temp -= numero2
        }
        
        console.log(`${numero} → ${temp}`)
    }
}
Ejercicio20()
