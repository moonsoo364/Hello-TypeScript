function getText<T> (text: T): T{
    return text;
}
// 매개변수에 맞게 함수를 사용한다.
getText<string>('hi');
getText<number>(1);
getText<boolean>(true);

//함수의 인자, 반환값의 타입 식별 불가능
function logText(text: any): any{
    return text;
}

function logText_1<T>(text: T): T{
    return text;
}

const text_1 = logText_1<string>("Hello World");
const text_2 = logText_1("Hello Worlds");//흔하게 사용됨

function logText_2<T>(text: T[]): T[]{
    console.log(text.length);//배열 형태의 인수임을 알기 때문에 사용 가능
    return text; 
}

let str_1: <T>(text: T) => T = logText_1;


