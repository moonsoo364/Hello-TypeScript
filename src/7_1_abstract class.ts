abstract class Developer_2{
    abstract coding() : void;
    drink(): void {
        console.log('drink sth');
    }
}

class FrontEndDeveloper extends Developer_2{
    coding(): void {
        console.log('develop web');
    }
    design() :void{
        console.log('design web');
    }
}

// const dev = new Developer_2(); // can not create an instance of an abstract 
const josh_2 = new FrontEndDeveloper();
josh_2.coding();
josh_2.drink();
josh_2.design();

