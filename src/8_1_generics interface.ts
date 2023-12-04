interface GenericLogTextFn{
    <T>(text: T): T;
}
function logText_3<T>(text: T): T{
    return text;
}
let myString: GenericLogTextFn = logText;