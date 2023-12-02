enum E {
    X,Y,Z
}
// runtime 시 enum은 Object 타입으로 존재
function getX(obj: {X: number}){
    return obj.X;
}

getX(E);
