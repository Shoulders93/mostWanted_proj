let numbers = [1, 2, 5, 22, 45, 66, 34, 102, 208];
//* This function calls the two filtering functions, one after the other, and returns the final result
function filterNumbers(arrayOfNumbers) {
  let firstTrait = searchByGender(arrayOfNumbers);
  let secondTrait = searchByHeight(firstTrait);
  return secondTrait;
}
//* This function takes the array of numbers and filters out odd numbers
function filterNumbersDivisibleByTwo(arrayOfNumbers) {
  let filteredNumbers = arrayOfNumbers.filter(function (number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  return filteredNumbers;
}
//* This function takes the filtered array of even numbers and gets rid of any numbers less than 50
function filterNumbersLessThanFifty(arrayOfNumbers) {
  let filteredNumbers = arrayOfNumbers.filter(function (number) {
    if (number > 50) {
      return true;
    } else {
      return false;
    }
  });
  return filteredNumbers;
}
//* Here, we call the function!
let result = filterNumbers(numbers);
console.log(result);