function aluno(nome, nota) { //cria uma function aluno e passa os parametro de 'nome e nota'
    this.nome = nome //this serve para reutilizar o nome dos parametros ao inves de criar outra variavel
    this.nota = nota //ex: ao inves de criar uma nova variavel voce reutiliza ela com o this

    console.log(nome)
    console.log(nota)
}
aluno('Micael', 10) //passa os parametros de nome e nota na function






let aluno1 = new aluno('Micael', 10);
console.log(aluno1.nome); // Micael
console.log(aluno1.nota); // 10