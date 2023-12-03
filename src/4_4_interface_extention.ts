interface Person{
    name: string;
}
interface Developer extends Person{
    ability: string;
}
let fe = {} as Developer;
fe.name = 'fosh';
fe.ability = 'typeScript';