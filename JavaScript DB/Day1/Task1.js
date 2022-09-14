let instance= null;
class CEO
{
    constructor(name,age,address)
    {
       if(instance==null)
       {
        this.name=name;
        this.age=age;
        this.address=address;
        instance=this;
       } 
       else
       {
        return instance;
       }
      
    }
}

let ceo1= new CEO("lamees",21,'cairo');
let ceo2= new CEO("Khaled",22,'NasrCity');

console.log(ceo1);
console.log(ceo2);