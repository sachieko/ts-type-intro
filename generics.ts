// // A common JS pattern where different data types are used without specifying what they are
const printElementNames = function <T, TKey extends keyof (T | THeaders)>(
  array: T[],
  key: TKey,
  headers: THeaders
): void {
  for (let element of array) {
    console.log(`${headers[key]}: ${element[key]}`);
  }
};

type THeaders = {
  [key: string]: string;
};

const foodHeaders: THeaders = {
  foodName: "Name",
  spicyLevel: "How Spicy",
  origin: "Country of Origin",
};

const planetHeaders: THeaders = {
  planetName: "Planet Name",
  distanceFromSun: "Distance from the Sun",
  colorOfPlanet: "Planet Colors",
};

const planetArray = [
  {
    planetName: "Mars",
    distanceFromSun: 4,
    biggestMoon: "Titan",
    colorOfPlanet: "Red",
  },
  {
    planetName: "Earth",
    distanceFromSun: 3,
    biggestMoon: "The Moon",
    colorOfPlanet: "Blue and Green",
  },
];

const foodArray = [
  {
    foodName: "Sushi",
    origin: "Japan",
    spicyLevel: 1,
    type: "rice",
  },
  {
    foodName: "Ramen",
    origin: "Japan and Korea",
    spicyLevel: "Varies",
    type: "soup",
  },
  {
    foodName: "Lasagna",
    origin: "Italy",
    spicyLevel: 0,
    type: "pasta",
  },
];

// Output
printElementNames(planetArray, "planetName", planetHeaders);
printElementNames(foodArray, "foodName", foodHeaders);
printElementNames(foodArray, "spicyLevel", foodHeaders);

// // A generic of a type which returns the same type

// // Type Inference
// // Automatically determining the types from each object,
// // so it allows you to type in your IDE faster.

// // flexibility
// // allow you to use it with lots of different types + reusability across different use cases
// // Gives you autocomplete

// // Generics with classes

// // Box
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
// // const stringBox = new Box("Typescript is kind of okay");
// // const numberBox = new Box(9);
// // const arrayBox = new Box(["hi", "how", "are", 9]);

// // console.log(stringBox.getValue());
// // console.log(numberBox.getValue());
// // console.log(arrayBox.getValue());

// // Using extends for constraints
// const printLength = function <T extends { length: number }>(input: T): void {
//   console.log(input.length);
// };

// printLength([1, 2, 3, 4, 5]);

// // Common pitfalls - best practices to correct.

// // Overly permissive
// // Limit types by using extends or union of other types

// // Complexity
// // Make as simple generic signatures as possible - break large ones into smaller parts

// // Any
// // avoid as much as possible. If you need flexible types, try using unions or extends.
// // ie: `var: string | number` instead of `var: any`

// // Inconsistent or complex naming
// // Common conventions are to use 'T', 'U'. Using meaningful names is also conventional too.

// // Overuse of generics
// // consider: are you going to reuse the code? Do you foresee using this in a bunch of
// // different areas of your app?
