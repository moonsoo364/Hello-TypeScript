interface login{
    (username: string, password: string): boolean;
}

let loginUser:login;
loginUser = function(id: string, pw: string){
    console.log('logined');
    return true;
}

interface CraftBeer{
    beerName: string;
    setBeer(beer: string): void;
}

class customBeer implements CraftBeer{
    beerName: string = 'Baby Guinness';
    setBeer(b: string){
        this.beerName = b;
    }
    constructor(bearName:string){
        this.beerName = bearName;
    }
} 