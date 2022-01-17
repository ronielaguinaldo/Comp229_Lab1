function sum(a,b){
    return a+b;
}

var myArr =[2,3,4,5,6];

console.log("The sum of the first two numbers is " + sum(...myArr)); //spread operator

function sumArr(...args){ //rest operator
    let numSum = 0;
    for(const arg of args){
        numSum+=arg
    }
    return numSum
}

console.log("The sum of all the numbers in the array is " + sumArr(...myArr));

//Design a function to return multiplication of first two arguments and sum of the rest 

function productSum(a,b,...args){
    let numSum = 0;
    let numProd = 0;

    numProd = a * b;
    for(const arg of args){
        numSum+=arg
        return numSum
    }
    return new Array(numProd, numSum);
}

console.log(productSum(2,3,4,5,6));

console.log("hello");