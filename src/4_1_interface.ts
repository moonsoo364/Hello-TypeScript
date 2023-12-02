//객체를 속성 타입을 명시적으로 선언
interface CraftBeeer {
    name: string;
    hop?: number; // 옵션 설정
    readonly brand: string;
}

let myBeer: CraftBeeer = {
    name: 'Saporo',
    brand:'Belgian Monk'
};
// myBeer.brand = 'Korean Carpenter'; //읽기 전용 속성
function brewBeer(beer: CraftBeeer){
    console.log(beer.name); // Saporo
}
brewBeer(myBeer);

let arr: ReadonlyArray<number> =[1,2,3];
//arr.splice(0,1); // error
//arr.push(4); // error
//arr[0] = 100; // error