const users = [
    {
        nome: 'Marcus Venicius',
        tecnologias: ['HTML', 'CSS', 'Javascript', 'Java', 'Spring']
    },
    {
        nome: 'Diego Fernandes',
        tecnologias: ['ReactJs', 'Node.js']
    },
    {
        nome: 'José Shay',
        tecnologias: ['React Native', 'Python']
    },
    {
        nome: 'Adhele Santiago',
        tecnologias: ['CSS', 'SaaS','React']
    }
];

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i].nome}, trabalha com ${users[i].tecnologias}`);
}

function checaCss (tecnologias) {
    for (let i = 0; i < tecnologias.length; i++) {
        
        if (tecnologias[i] == 'CSS') {
            return true;
        }
    }
}

for (let i = 0; i < users.length; i++) {
    
    const trabalhaComCss = checaCss(users[i].tecnologias);

    if (trabalhaComCss) {
        console.log(`O Usuário ${users[i].nome} trabalha com CSS`);
    }
}