interface Person{
    name: string;
    age: number;
}
interface Developer{
    name: string;
    skill: number;
}
type Capt = Person & Developer;

function introduce(someone: Person | Developer) : void{
    someone.name;
    //someone.age; // 타입 오류
    //someone.skill; //타입 오류
 }
 
 const capt: Person = { name: 'capt', age: 100};
 introduce(capt);
