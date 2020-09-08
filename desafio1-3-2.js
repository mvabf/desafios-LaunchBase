const usuarios = [
    {
        nome: 'Silvio Santos',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Gugu Liberato',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Celso Portioli',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

const calculaSaldo = (receitas, despesas) => {
    let totalReceita = somaNumeros(receitas);
    let totalDespesas = somaNumeros(despesas);

    return totalReceita - totalDespesas;
}

function somaNumeros(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

for (let i = 0; i < usuarios.length; i++) {

    let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);

    let situacao = saldo >= 0 ? 'POSITIVO': 'NEGATIVO';

    console.log(`${usuarios[i].nome} possui saldo ${situacao} de ${saldo.toFixed(2)}`);
}

console.table(usuarios);
