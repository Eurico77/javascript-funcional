// criar uma func somar (3)(4)(5)

function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// calcular(3)(7)(fn que ira calcular os valores anteriores)
