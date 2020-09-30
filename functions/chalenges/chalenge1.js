function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// calcular(3)(7)(fn que ira calcular os valores anteriores)

function calcular(p) {
    return function (x) {
        return function (fn) {
            return fn(p, x);
        };
    };
}

const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;

const data = calcular(12)(10)(multiplicar);

console.log(` o resultado é:  ${data} `);
