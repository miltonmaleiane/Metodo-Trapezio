function solveRungeKutta() {

    // Obtenha os valores dos campos de entrada
    var inferior = parseFloat(document.getElementById("inferior").value);
    var superior = parseFloat(document.getElementById("superior").value);
    var n = parseFloat(document.getElementById("n").value);
    var functionInput = document.getElementById("functionInput").value;
    if (!n || !functionInput) return alert("Por favor, preencha todos os campos")

    var x = inferior;
    const h = (superior - inferior) / n
    let aux = []
    function f(X) {

        try {

            const result = eval(functionInput.replace(/x/g, (X)));


            // Verifique se o resultado é um número válido
            if (isNaN(result)) {
                return console.log("Resultado não é um número válido.");
            }

            return result;

        } catch (error) {
            // Se ocorrer um erro, lança uma exceção com a mensagem de erro
            throw new Error(`Expressão inválida: ${error.message}`);
        }


    }


    var result = "<table border='1'><tr><th>i</th><th>x</th><th>f(x)</th></tr>";

    // Iteração usando Runge-Kutta de 4ª ordem
    for (var i = 0; i <= n; i++) {

        var y = f(x);

        result += "<tr>";
        result += "<td>" + i + "</td>";
        result += "<td>" + x.toFixed(1) + "</td>";
        result += "<td>" + y.toFixed(5) + "</td>";

        result += "</tr>";
        aux.push(y)
        x += h;
    }

    result += "</table>";

    let soma = 0;
    for (var i = 1; i <= aux.length - 2; i++) {
        console.log(aux[i])
        soma = soma + aux[i];
    }
    console.log(soma);
    const area = (h / 2) * (aux[0] + aux[n] + 2 * (soma));
    console.log(area);





    document.getElementById("result").innerHTML = result;
    document.getElementById("area").innerHTML = `<p> Area=${area.toFixed(5)}</p>`;
}


