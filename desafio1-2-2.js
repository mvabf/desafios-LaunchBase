const programador = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'Java',
            especialidade: 'Web'
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);

console.log(`Outras tecnologias ${programador.tecnologias[1].nome}, com foco em 
${programador.tecnologias[1].especialidade}`);