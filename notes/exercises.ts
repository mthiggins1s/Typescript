// Exercise I:
// 
//  Define an interface called Book that has the following properties:

// title: a string
// author: a string
// year: a number
// Create a variable book1 of type Book and assign it an object representing the book "To Kill a Mockingbird" by Harper Lee, published in 1960.

// Write a function logBookDetails that accepts a parameter of type Book and logs the book's details in a sentence (e.g., "To Kill a Mockingbird by Harper Lee was published in 1960.").

// Call the function, passing book1 as the argument.

interface Book {
    title: string;
    author: string;
    year: number;
  }
  
  const book1: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  };
  
  function logBookDetails(book: Book): void {
    console.log(`${book.title} by ${book.author} was published in ${book.year}.`);
  }
  
  logBookDetails(book1);


// Exercise 2: Working with Typed Functions
// Scenario: You’re building a small utility that calculates the area of a rectangle.

// Steps:

// Create a function calculateArea that takes two parameters:

// width: a number
// height: a number
// Add a return type to the function to ensure it always returns a number.

// Inside the function, return the area of the rectangle by multiplying width and height.

// Call the function with the dimensions 5 and 10 and assign the result to a variable named area.

// Log the result to the console to confirm it works correctly.

function calculateArea(width: number, height: number): number {
    return width * height;
  }
  
  const area = calculateArea(5, 10);
  console.log(`The area is: ${area}`);



// Exercise 3: Using Arrays with TypeScript
// Scenario: You’re managing a list of favorite movies and need to add type safety to your code.

// Steps:

// Create a type alias called Movie that represents an object with the following properties:

// title: a string
// year: a number
// Create an array named favoriteMovies that holds items of type Movie. Start with two movies:

// "Inception", 2010
// "The Matrix", 1999
// Write a function addMovie that accepts a movie of type Movie and adds it to the favoriteMovies array.

// Call the function to add a new movie ("Interstellar", 2014) to the array.

// Write a loop to log all the movies in the favoriteMovies array, displaying their titles and years.

type Movie = {
    title: string;
    year: number;
  };
  
  const favoriteMovies: Movie[] = [
    { title: "Inception", year: 2010 },
    { title: "The Matrix", year: 1999 },
  ];
  
  function addMovie(movie: Movie): void {
    favoriteMovies.push(movie);
  }
  
  addMovie({ title: "Interstellar", year: 2014 });
  
  favoriteMovies.forEach((movie) => {
    console.log(`${movie.title} (${movie.year})`);
  });



// Exercise 4: Understanding Union Types
// Scenario: You’re building a program that can work with both numbers and strings to calculate a message.

// Steps:

// Write a function formatMessage that accepts a single parameter input of type number | string.

// Inside the function, check the type of input using the typeof operator:

// If it’s a number, return "The number is: " followed by the number.
// If it’s a string, return "The string is: " followed by the string.
// Call the function twice:

// Once with the number 42.
// Once with the string "Hello, TypeScript!".
// Log the results to the console to verify the output.

function formatMessage(input: number | string): string {
  if (typeof input === "number") {
    return `The number is: ${input}`;
  } else {
    return `The string is: ${input}`;
  }
}

console.log(formatMessage(42));
console.log(formatMessage("Hello, TypeScript!"));



// Exercise 5: Exploring Generics
// Scenario: You’re creating a reusable function to wrap any value in an object.

// Steps:

// Write a generic function wrapInObject that takes a value of any type as a parameter and returns an object containing that value under the key data.

// Inside the function, use a generic type parameter to ensure type safety.

// Call the function twice:

// Once with a string value "TypeScript is fun!".
// Once with a number 100.
// Log the returned objects to the console to see the wrapped values.

function wrapInObject<T>(value: T): { data: T } {
    return { data: value };
  }
  
  const wrappedString = wrapInObject("TypeScript is fun!");
  const wrappedNumber = wrapInObject(100);
  
  console.log(wrappedString);
  console.log(wrappedNumber);