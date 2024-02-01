
//1. Do the below programs in anonymous function & IIFE
    //a. Print odd numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10];
var oddArr = [];
var printOdd = function(inArr){
    for(i=0;i<inArr.length;i++)
    {
        if((inArr[i]%2) != 0){
            oddArr.push(inArr[i]);
        }
    }
    return oddArr; 
}
console.log("Annonymous funtion output for Print odd numbers in an array");
console.log(printOdd(arr));

//// In IIFE

var res = (function(inArr){
    var oddArr = [];
    for(var i=0;i<inArr.length;i++)
    {
        if((inArr[i]%2) != 0){
            oddArr.push(inArr[i]);
        }
    }
    return oddArr; 
})([1,2,3,4,5,6,7,8,9,10])
console.log("IIFE output for Print odd numbers in an array");
console.log(res);

    // b. Convert all the strings to title caps in a string array
var str = "hello java script "
var strArr = function(str){
  var tmpArrstr = [];
    var strToArr = (str.replace(/\s+/g, "")).split("")
    for(var i=0;i<strToArr.length;i++)
    {
      tmpArrstr.push(strToArr[i].toUpperCase());
    }
    return tmpArrstr;
}
console.log("Annonymous funtion output for Convert all the strings to title caps in a string array");
console.log(strArr(str))

/// By IIFE

var strArr = (function(str){
  var tmpArrstr = [];
    var strToArr = (str.replace(/\s+/g, "")).split("")
    for(var i=0;i<strToArr.length;i++)
    {
      tmpArrstr.push(strToArr[i].toUpperCase());
    }
    return tmpArrstr;
})("hello java script ");
console.log("IIFE output for Convert all the strings to title caps in a string array");
console.log(strArr);


// c. Sum of all numbers in an array
var numberArr = [1,2,3,4,5,6,7,8,9,10];
var numberSum = function(inArr){
    var tmpNum = 0;
    for(i=0;i<inArr.length;i++){
        tmpNum+=inArr[i]
    }
    return tmpNum;
}
console.log("annonymous funtion output for Sum of all numbers in an array");
console.log(numberSum(numberArr))
// By IIFE
var numberSum = (function(inArr){
    var tmpNum = 0;
    for(i=0;i<inArr.length;i++){
        tmpNum+=inArr[i]
    }
    return tmpNum;
})([1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE output for Sum of all numbers in an array");
console.log(numberSum);

//     // d. Return all the prime numbers in an array
var allNumArr = [1,2,3,4,5,6,7,8,9,10];
var primeArr  = [];
var printPrime = function(inArr){
    for(i=0;i<inArr.length;i++){
        var count = 0;
        if(inArr[i]===1)
        continue;
        for(j=1;j<=inArr[i];j++){
            if(inArr[i]%j===0){
                count++;
            }
        }
        if(count<=2)
        {
            primeArr.push(inArr[i]);
        }

    }
    return primeArr;
}
console.log("annonymous funtion output for Return all the prime numbers in an array");
console.log(printPrime(allNumArr));

//  By IIFE
var primeArr  = [];
var printPrime = (function(inArr){
    for(i=0;i<inArr.length;i++){
        var count = 0;
        if(inArr[i]===1)
        continue;
        for(j=1;j<=inArr[i];j++){
            if(inArr[i]%j===0){
                count++;
            }
        }
        if(count<=2)
        {
            primeArr.push(inArr[i]);
        }

    }
    return primeArr;
})([1,2,3,4,5,6,7,8,9,10]);
console.log("IIFE funtion output for Return all the prime numbers in an array");
console.log(primeArr);

    // e. Return all the palindromes in an array
var allNumArrP = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var tempArr = [];
var printPalind = function(inArr){
    for(i=0;i<allNumArrP.length;i++)
    {
        var arrOwnNum = allNumArrP[i].toString().split("").reverse().join("")
        if(parseInt(arrOwnNum)===allNumArrP[i])
            tempArr.push(arrOwnNum);
    }
    return tempArr;
}
console.log("annonymous funtion output for Return all the palindromes in an array");
console.log(printPalind(allNumArrP))

// BY IIFE
var printPalind = (function(inArr){
    var tempArr = [];
    for(i=0;i<allNumArrP.length;i++)
    {
        var arrOwnNum = allNumArrP[i].toString().split("").reverse().join("")
        if(parseInt(arrOwnNum)===allNumArrP[i])
            tempArr.push(arrOwnNum);
    }
    return tempArr;
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
console.log("IIFE funtion output for Return all the palindromes in an array");
console.log(printPalind)


    // f. Return median of two sorted arrays of the same size.
var arr1 = [10,50,12,4,5];
var arr2 = [55,2,8];
var res = function(arr1,arr2){
    var arrSorted = [...arr1,...arr2].sort((a,b)=>a-b)
    console.log(arrSorted)
    var n = arrSorted.length;
    var medianNum = 0;
    if(n%2===0){
        medianNum = (arrSorted[n/2-1]+arrSorted[n/2])/2
    }
    else{
        medianNum = (arrSorted[Math.floor(n/2)]);
    }
    return medianNum;
}
console.log("annonymous funtion output for Return median of two sorted arrays of the same size.");
console.log(res(arr1,arr2));

//BY IIFE
var res = (function(arr1,arr2){
    var arrSorted = [...arr1,...arr2].sort((a,b)=>a-b)
    var n = arrSorted.length;
    var medianNum = 0;
    if(n%2===0){
        medianNum = (arrSorted[n/2-1]+arrSorted[n/2])/2
    }
    else{
        medianNum = (arrSorted[Math.floor(n/2)]);
    }
    return medianNum;
})([10,50,12,4,5],[55,2,8])
console.log("IIFE funtion output for Return median of two sorted arrays of the same size.");
console.log(res);

// g. Remove duplicates from an array
var forUniqarr = [10,50,10,4,5,50,2,4];
var remDup = function(orArr){
    var obj = {}
    var minocc = 1;
    var tmpUniqNum = [];
    for(var i=0;i<orArr.length;i++)
    {
    var ele = orArr[i];
    if(obj[ele])
    {
        obj[ele]++;
    }
    else{
        obj[ele]=1;
    }
}
  for(var ele1 in obj){
    if(obj[ele1]===1)
    {
      tmpUniqNum.push(ele1)
    }
  }
    return tmpUniqNum;
}
console.log("annonymous funtion output for Remove duplicates from an array");
console.log(remDup(forUniqarr));

// BY IIFE
var remDup = (function(orArr){
    var obj = {}
    var minocc = 1;
    var tmpUniqNum = [];
    for(var i=0;i<orArr.length;i++)
    {
    var ele = orArr[i];
    if(obj[ele])
    {
        obj[ele]++;
    }
    else{
        obj[ele]=1;
    }
}
  for(var ele1 in obj){
    if(obj[ele1]===1)
    {
      tmpUniqNum.push(ele1)
    }
  }
    return tmpUniqNum;
})([10,50,10,4,5,50,2,4]);
console.log("IIFE funtion output for Remove duplicates from an array");
console.log(remDup);

// h. Rotate an array by k times
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
var res = function(arr,k) {
    var out = arr.slice(k, arr.length);
    var count = out.length;
    for (var i = 0; i < k; i++) {
    out[count] = arr[i];
    count += 1;
    }
    return out;
   }
   console.log("annonymous funtion output for Rotate an array by k times")
   console.log(res(arr,k));
   
// By IIFE
var res = (function(arr,k) {
 var out = arr.slice(k, arr.length);
 var count = out.length;
 for (var i = 0; i < k; i++) {
 out[count] = arr[i];
 count += 1;
 }
 return out;
})([1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13],3);
console.log("IIFE funtion output for Rotate an array by k times")
console.log(res);

// 2. Do the below programs in arrow functions.
    // a. Print odd numbers in an array
var arr = [1,2,3,4,5,6,7,8,9,10];
var oddArr = [];
var printOdd = (inArr)=>{
    for(i=0;i<inArr.length;i++)
    {
        if((inArr[i]%2) != 0){
            oddArr.push(inArr[i]);
        }
    }
    return oddArr; 
}
console.log("Arrow funtion output for Print odd numbers in an array");
console.log(printOdd(arr));

    // b. Convert all the strings to title caps in a string array
var str = "hello java script "
var strArr = (str)=>{
    var tmpArrstr = [];
    var strToArr = (str.replace(/\s+/g, "")).split("")
    for(var i=0;i<strToArr.length;i++)
    {
      tmpArrstr.push(strToArr[i].toUpperCase());
    }
    return tmpArrstr;
}
console.log("Arrow funtion output for Convert all the strings to title caps in a string array");
console.log(strArr(str))

    // c. Sum of all numbers in an array
var numberArr = [1,2,3,4,5,6,7,8,9,10];
var numberSum = (inArr)=>{
    var tmpNum = 0;
    for(i=0;i<inArr.length;i++){
        tmpNum+=inArr[i]
    }
    return tmpNum;
}
console.log("Arrow funtion output for Sum of all numbers in an array");
console.log(numberSum(numberArr))

    // d. Return all the prime numbers in an array
var allNumArr = [1,2,3,4,5,6,7,8,9,10];
var primeArr  = [];
var printPrime = (inArr)=>{
    for(i=0;i<inArr.length;i++){
        var count = 0;
        if(inArr[i]===1)
        continue;
        for(j=1;j<=inArr[i];j++){
            if(inArr[i]%j===0){
                count++;
            }
        }
        if(count<=2)
        {
            primeArr.push(inArr[i]);
        }

    }
    return primeArr;
}
console.log("Arrow funtion output for Return all the prime numbers in an array");
console.log(printPrime(allNumArr));

    // e. Return all the palindromes in an array
    var allNumArrP = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var tempArr = [];
    var printPalind = (inArr)=>{
        for(i=0;i<allNumArrP.length;i++)
        {
            var arrOwnNum = allNumArrP[i].toString().split("").reverse().join("")
            if(parseInt(arrOwnNum)===allNumArrP[i])
                tempArr.push(arrOwnNum);
        }
        return tempArr;
    }
    console.log("Arrow funtion output for Return all the palindromes in an array");
    console.log(printPalind(allNumArrP))
    
