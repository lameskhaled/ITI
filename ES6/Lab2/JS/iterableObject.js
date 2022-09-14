
var myObj={
    uname:"Sarah",
    age:26,
    address:"Assuit",
    track:"MEARN Stack",
    [Symbol.iterator]:function(){
        let objKeys=Object.keys(this);
        let counter=-1;
        return{
            next:function(){
                if(counter<objKeys.length-1){
                    counter++;
                    return {value:myObj[objKeys[counter]],done:false};
                }
                else{
                    return {value:undefined,done:true};
                }
            }
        }
    }
}
// var itr=myObj[Symbol.iterator]();
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

for(let [k,v] of Object.entries(myObj)){
    console.log(k+" : "+v);
}

