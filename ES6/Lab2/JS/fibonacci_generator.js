
function*fibonacci(n)
{

    let current = 0;
    let next = 1;
    let newNum =current+next;


    if(n===1){
        yield current;
    }
    else if(n==0){
        yield '';
    }
    else{
        yield current;
        yield next;
     
        for(let i=1;i<n-1;i++){
            yield newNum=current+next;
            current=next;
            next=newNum;
        }
     

      
    }


}

var f=fibonacci(7); //Where n is the numbers i want to display from the series
console.log("1-> "+f.next().value);
console.log("2-> "+f.next().value);
console.log("3-> "+f.next().value);
console.log("4-> "+f.next().value);
console.log("5-> "+f.next().value);
console.log("6-> "+f.next().value);
console.log("7-> "+f.next().value);
console.log("8-> "+f.next().value);
console.log("9-> "+f.next().value);
console.log("10-> "+f.next().value);
console.log("11-> "+f.next().value);