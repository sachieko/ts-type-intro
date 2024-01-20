// A common JS pattern where different data types are used without specifying what they are
const arr1 = [1, 2, 3];
const arr2 = ["four", "five", "six"];
const arr3 = [4, 5, 6]
const arr4 = ["one", "two", "three"];

const createArrayFromPair = function<T>(arg1: T, arg2: T): [T, T] {
  return [arg1, arg2];
};

// const result = createArrayFromPair('one','two');
const result2 = createArrayFromPair(3, 4);
const result3 = createArrayFromPair('five', 'four');

// console.log(result);  // Output: [1, 2, 3, "four", "five", "six"]
// console.log(result2);  // Output: [1, 2, 3, 4, 5, 6] with no TS warning
console.log(result3[0].length);  //

for (let i = 0; i < result3[0].length; i++) {
  console.log('hi');
}

// const planetHeaders = {
//   planetName: "Planet Name",
//   biggestMoon: "Most Popular Moon",
// };

// const planetArray = [
//   {
//     planetName: "Mars",
//     distanceFromSun: 4,
//     biggestMoon: "Titan",
//     colorOfPlanet: "Red",
//   },
//   {
//     planetName: "Earth",
//     distanceFromSun: 3,
//     biggestMoon: "The Moon",
//     colorOfPlanet: "Blue and Green",
//   },
// ];

// const tvShows = [
//   {
//     title: "The Bear",
//     genres: ["Comedy", "Drama"],
//     creator: "Christopher storer",
//     release_date: 2022,
//   },
// ];
// Output

// A generic of a type which returns the same type

// Type Inference
// define the type expected by a function based on what you pass it

// flexibility
// Allows you to reuse the code with different types in different areas
// without sacrificing type safety.

// Generics with classes

// Box
// class Box<T> {
//   private value: T;

//   constructor(initialValue: T) {
//     this.value = initialValue;
//   }

//   getValue(): T {
//     return this.value;
//   }
// }
// // Creating instances
// const stringBox = new Box("Typescript is kind of ok");
// const numberBox = new Box(24);
// const arrayBox = new Box(['one','two','three']);

// console.log(stringBox.getValue());
// console.log(numberBox.getValue());
// console.log(arrayBox.getValue());

// Using extends for constraints

// const printLength = function<objWithLength extends { length: number }>(input: objWithLength) {
//   console.log(input.length);
// };

// printLength('hi');
// printLength('5theihite');

// Common pitfalls - best practices to correct.

// Overly permissive
// Use extends to make your types more selective.
// Reduces edge cases and provides more useful information to devs using functions you define.
function printToConsole<T>(input: T) {
  console.log(input);
}

// Complexity
// generic types can get very complicated very quickly if too many things are interacting
// with types you've defined. Try to keep generic type definitions as simple as possible.
// Break them into smaller pieces and compose them with union.

// Any
// avoid as much as possible

// Inconsistent or complex naming
// general convention when making generic types is single letter T, K, or U variables
// However, it's also fine to make custom type parameters that are self explanitory.

// Overuse of generics
// When you plan to reuse this code in many areas and it will always involve different types
// which you can't predict ahead of time.
const stringToArray = <T>(input: T): [T] => {
  return [input];
}

const result = stringToArray(5);
console.log(result);
