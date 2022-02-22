// Crie um objeto que receba ao menos três propriedades sobre você.

let myself = {
    name: "Vitória" ,
    age: 20 ,
    personality:["strong", "polite", "sweet"]
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.

myself.hairColor = "blond"



// Remova uma propriedade desse objeto.

delete 
myself.age

//Mostre no console todas as propriedades desse objeto.

console.log(myself)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos.



let cadastro = [
    {
        name: 'Julie',
        age: 18,
        number: 51998463728,
        friends: [ 'Luke', 'Anna', 'Suzie', 'Gilbert']
    },{
        name: 'Emma',
        age: 28,
        number: 9864732623,
        friends: [ 'Oscar', 'Mary', 'Jane', 'Olivia']
    },{
        name: 'Naomi',
        age: 16,
        number: 3298748022,
        friends: [ 'Sthephan', 'Gracey', 'Eduard', 'Herbert']
    },{
        name: 'Jessica',
        age: 23,
        number: 314872359,
        friends: [ 'Vicka', 'Johnny', 'Anastasia', 'Virginia']
    },{
        name: 'Rick',
        age: 70,
        number: 137,
        friends: [ 'Morty', 'Summer', 'Beth', 'Mrs. Poppybutthole']
    }
]
 
console.log(`${cadastro[0].friends[0]} is a friend of ${cadastro[0].name}`)
console.log(`${cadastro[1].friends[0]} is a friend of ${cadastro[1].name}`)
console.log(`${cadastro[2].friends[0]} is a friend of ${cadastro[2].name}`)
console.log(`${cadastro[3].friends[0]} is a friend of ${cadastro[3].name}`)
console.log(`${cadastro[4].friends[0]} is a friend of ${cadastro[4].name}`)

//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.

//ok

//Na propriedade amigos, adicione ao menos 4 itens.

//ok

// Mostre no console o nome de um amigo de cada lista

