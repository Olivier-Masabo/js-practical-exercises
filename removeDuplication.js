 function removeDuplicate(arr){
    let newArr =[]
 for(let item of arr){
    if(!newArr.includes(item)){
        newArr.push(item)
    }
}
return newArr.sort((a,b) => a - b);

// let result = arr.sort((a,b) =>a - b)
// let final= result.filter((elem) => result.indexOf(elem) === result.lastIndexOf(elem))
// console.log(final)
 }

console.log(removeDuplicate([2,1,3,4,2,5,6,5,7,5,7,5,8]))