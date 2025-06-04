const numbers = [2, 4, 6]; //cria uma var. com os numeros

const twice = numbers.map((multi) => //cria outra var. pegando o numbers.map para pegar os valores de numbers com um arrow function
    multi * 2 );  //dentro da nova var.(numbers) vc transformou ela em outra var.arrow function(multi) e agr fez multi * 2
console.log(twice) //resultado: 12, 14, 16

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const pessoas = [ //criar uma var com id e names das pessoas
    {id: 1, name: 'Micael'},
    {id: 2, name: 'João'},  
    {id: 3, name: 'David'}
]

console.log(pessoas.map //utiliza o pessoas.map para caminhar sobre os valores da const pessoas
    ((user) => user.name)) //transforma pessoas.map em uma var user e cria um arrow function para selecionar apenas os names da var pessoas que foi transformarda em user.
    //  Caso queira receber os id basta colocar user.id
