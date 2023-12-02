function sum(a: number, b?: number): number{
    if(b != undefined)
        return a+b;
    else
        return a;
}

sum(10,20);
sum(10);
sum(10,undefined);


//rest
function sumRest(a:number, ...nums: number[]): number{
    let totalOfNums: number = 0;
    for(let key in nums){
        totalOfNums +=nums[key];
    }
    return totalOfNums;
}

