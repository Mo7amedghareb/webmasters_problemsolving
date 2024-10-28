// problem 1 filtering an array to get even numbers
/*
let n = parseInt(prompt("Enter the array size:"));
let array=[];
for(let i=0;i<n;i++){
    array[i] = parseInt(prompt("Enter element " + (i + 1) + ":"));
}
function even(){
    const newlist=[];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            newlist.push(array[i]);
        }
    }
    for(let i=0;i<newlist.length;i++){
        console.log(newlist[i]);
    }
}
even(...array);
*/
//****************************************************************************************************** */




//problem 2 max number in array
/*
function maximum(){
    let size=parseInt(prompt("enter the array size"));
    let arr2=[];
    for(let i=0;i<size;i++){
        arr2[i]=prompt();
    }
    let max=Math.max(...arr2);
    console.log(max);
}
maximum();
*/
//****************************************************************************************************** */








//third problem reverse the string
/*
function ReverseTheString() {
    let s = prompt("Enter the string:");
    let reversedString = s.split('').reverse().join('');
    console.log(reversedString);
}
ReverseTheString();
*/
//****************************************************************************************************** */









//problem 4 remove duplicates
/* 
function removeDublicates(){
    let sizeofarray=prompt("enter array size");
    let arr=[];
    for(let i=0;i<sizeofarray;i++){
        arr[i]=prompt();
    }
    let myset=new Set(arr);
    console.log(...myset);
}
removeDublicates();
*/

//another way for duplicate function
/*
function rendup(arr){
    return[...new Set(arr)];
}
let arr=[1,2,2,2,3,4,5,5,5];
console.log(rendup(arr));
*/