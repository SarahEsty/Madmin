const family = ['jude', 'chinenye', 'uche']

family;
console.log(family);

family.push('chinewedu');

console.log(family);

family.pop('chinwendu');
family

const relations = [

    {
        familyName: "Okafor",
        head: "jude"
    },
    {
        familyName: "Nwafor",
        head: "innocent"
    }
]

relations[0].familyName
console.log(relations[1].familyName);

// write a script that shows all the even numbers from 1 -10000;

const lastValue = 100;

for (let index = 0; index < lastValue; index++) {
    if(index % 9 === 0) {
        console.log(index);
    }
    
}=Ol