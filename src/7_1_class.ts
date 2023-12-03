//readonly
class Developer{
    readonly nickName: string;
    constructor(theName: string){
        this.nickName = theName;
    }
}
let john = new Developer("IceBear");
// john.nickName = "Griz"; //error

//accessor
class Developer_1{
    private name: string = '';
    get getName(): string{
        return this.name;
    }
    set setName(newValue: string){
        if(newValue && newValue.length > 5){
            throw new Error('이름이 너무 깁니다.');
        }
        this.name = newValue;
    }
}
const josh = new Developer_1();
josh.setName = 'Josh';
josh.getName;
