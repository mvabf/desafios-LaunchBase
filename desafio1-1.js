const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

const calcularIMC = () => {
    let imc = peso / (Math.pow(altura, 2));
    console.log(imc);

    const resultado = imc >= 30 ? `${nome} você está acima do peso!`:`${nome} você não está acima do peso!`;

    return resultado;
}

console.log(calcularIMC());