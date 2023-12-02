interface CraftBeer_1 {
    (beer: string): string;
    brand: string;
    brew(): void;
  }
  
  function myBeer_1(): CraftBeer_1 {
    let my = (function(beer: string) {})as CraftBeer_1;
    my.brand = 'Beer Kitchen';
    my.brew = function() {
        console.log(this.brand);
    };
    return my;
  }
  
  let brewedBeer = myBeer_1();
  brewedBeer('My First Beer');
  console.log(myBeer_1());
  
  brewedBeer.brand = 'Pangyo Craft';
  brewedBeer.brew();