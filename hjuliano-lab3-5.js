function person (personArray){
     for (let i = 0; i < personArray.length; i++) {
        console.log(`${personArray[i].name} is ${personArray[i].age} and from ${personArray[i].city} \n`);
    }
    console.log(`\n`);
}

person ([{name: 'Name', age: 23, city: 'Chicago'}]);

person ([
    {name: 'Hailie', age: 21, city: 'Chicago'},
    {name: 'April', age: 41, city: 'Chicago'},
    {name: 'Mary', age: 16, city: 'Hong Kong'},
    {name: 'Chloe', age: 17, city: 'Sydney'},
    {name: 'Ryan', age: 40, city: 'Chicago'}
]
);

person ([
    {name: 'Joe', age: 21, city: 'London'},
    {name: 'Jane', age: 35, city: 'Barcelona'},
    {name: 'Joseph', age: 60, city: 'Madrid'},
    {name: 'Julie', age: 16, city: 'Paris'},
    {name: 'Jax', age: 25, city: 'Memphis'}
]);

/*
Output:
Name is 23 and from Chicago 

Hailie is 21 and from Chicago 
April is 41 and from Chicago 
Mary is 16 and from Hong Kong 
Chloe is 17 and from Sydney 
Ryan is 40 and from Chicago 

Joe is 21 and from London 
Jane is 35 and from Barcelona 
Joseph is 60 and from Madrid 
Julie is 16 and from Paris 
Jax is 25 and from Memphis 
*/