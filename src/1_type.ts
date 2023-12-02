//기본형
let str: string = 'hi';
let num: number = 10;
let isLogged: boolean = false;

let arrNum: number[] = [1,2,3];
let arrGen: Array<number> = [1,2,3];
let tup: [string, number] =['hi',10];
// 정해지지 않은 타입: tup[1].concat('!');
// 정해지지 않은 인덱스:tup[5]="hello"

enum Avengers {Capt=2,IronMan,Thor};
let hero1: Avengers = Avengers.Capt;//2
let hero2: string = Avengers[2];//Capt
let hero3: string = Avengers[4];//Thor

let anyVar: any = 'hi';
anyVar = 1;
anyVar = ['a',2,true];

//void: 반환값이 없는 함수
function printSomething(): void{
    console.log('void');
}

function returnNothing(): void{
    return;
}

//never: 함수의 끝에 절대 도달하지 않는 의미를 가진 타입
function neverEnd(): never {
    while(true){

    }
}
