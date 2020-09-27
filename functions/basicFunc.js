function bomDia() {
    console.log('Bom dia ');
}

function boaTarde() {
    console.log('Boa tarde ');
}

// 1) passar uma func por parametro para outra
function chamarOutrasFuncs(fn) {
    if (typeof fn == 'function') {
        fn();
    }
}

chamarOutrasFuncs(bomDia);
chamarOutrasFuncs(boaTarde);

// 2) Retornar uma func a partir de uma outra func

const potencia = (base, exp) => Math.pow(base, exp);
console.log(`a potencia é ${potencia(2, 2)}`);

function potencia2(base) {
    return function (exp) {
      return  Math.pow(base, exp);
    };
}

const potencia2De2 = potencia2(2);

console.log(potencia2De2(8));

const result = potencia2(3)(4);

console.log(result);
