const nome = 'Marcus';
const sexo = 'M';
const idade = 54;
const contribuicao = 35;

if (sexo == 'M') {
    if (contribuicao >= 35 || idade + contribuicao >= 95) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
} else {
    if (contribuicao >= 30 || idade + contribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`)
    }
}
