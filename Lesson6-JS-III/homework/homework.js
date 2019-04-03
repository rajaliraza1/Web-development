// Do not change any of the function names

function returnFirst(arr) {
  // return the first item from the array
  return(arr[0]);
}
returnFirst('arr');

function returnLast(arr) {
  // return the last item of the array
  return arr[arr.length-1];
}
returnLast('arr');

function getArrayLength(arr) {
  // return the length of the array
  return arr.length;
}
getArrayLength('arr');

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for(let i=0; i<arr.length; i++){
    arr[i]= arr[i]+1;
  }
  return arr[i];
}
incrementByOne(arr);

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  arr.push(1,2,3,4,5);
  return arr;
}
addItemToArray([5]);

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(1,2,3,4,5,6,7,8,9);
  return arr;
}
addItemToFront([8]);

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join('Hello','world!'+'Hello world!');
}

wordsToSentence(words);

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
 for(i=0; i<arr.length; i++){
   if(arr[i] === item){
     return true;
   }
 }
 return false;
}
contains([1]);

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
for (let i = 0; i < arr.length; i++){
  if(arr[i]=== item){
    return true;
  }
}
return false;
}
addNumbers(2);

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let total=[0];
  for(let i = 0; i < testScores.length; i++){
    total += testScores[i];
  }
  average = (total / testScores.length);{

return average;
  }
}
averageTestScore([1,3]);


function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

  let largest=[0];
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i]>largest){
      largest = numbers[i];
    }
  }
  return largest
}
largestNumber([1,2,3,5,7,9]);

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
};
