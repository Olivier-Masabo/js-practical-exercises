 let createCounter =() =>{
    let count =0;
   return function counterFn(){
       count ++;
       return count;
    }
    
 }
 let result =createCounter();
 console.log(result())
 console.log(result())