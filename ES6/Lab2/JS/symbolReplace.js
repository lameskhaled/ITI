
var mystr="Incomprehensibility";
var mystr22="I am the legends here";

let obj={
    [Symbol.replace]:function(str){
        if(str.length>15){
            return `${str.substring(0,15)}... `;
                
            }
        }
    }

console.log(mystr.replace(obj));
console.log(mystr22.replace(obj));