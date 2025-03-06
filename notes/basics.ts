// Primitives: numbers, strings, booleans
// More complex types: arrays, objects
// Function types, parameters



// Primitives

let age: number; // with typescript, we can specify the varaiable.

age = 12;

let userName: string | string[]; // use lowercase, it POINTS to the number object in JS, we want the number PRIMITIVE type, same for string.

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;



// More complex types

let hobbies: string[]; // this tells TypeScript that we want an array of strings in 'hobbies'; works the same with numbers and booleans.
hobbies = ['Sports', 'Cooking'];



// we can also use an ALIAS to prevent repeating type definitions

type Person = {  // Object type definition, defining the type for the object
    name: string;
    age: number; // we tell TS that ONLY objects that have these kinds of type should be storable in this variable.
};

let person: Person; // we now only have to define the ALIAS

person = {
    name: 'Max',
    age: 32
};

// person = {
// isEmployee: true // this is NOT storable, hence why we get an error, since the type is not being defined.
// }

let people: Person[]; // we can define that this will be an ARRAY with square brackets. With the ALIAS, we can still define that we want this in an ARRAY.



// Type Inference

let course: string | number = 'React - The Complete Guide'; // UNION TYPE

course = 12341; // Error: the type 'number' is NOT assignable to type 'string'. By default, TS tries to know what type are used where, without us explicly saying what type we use.

// The error is gone BECAUSE we are allowing allowing a number alteratively to a string value.



// Functions & Types

function add(a: number, b: number) { // we define 'number' types the third 'number' defined when hovering over 'add' comes from the 'return' value.
    return a + b;
}

function print(value: any) { // this function DOES NOT return anything; has a special return type called 'void'; kind of like 'null' or 'undefined'. This funciton never returns.
    console.log(value);
}



// Generics: helps you write functions, which are type-safe and flexible.

// function insertAtBeginning(array: any[], value: any) {
//     const newArray = [value, ...array]; // spread operator; JS feature supported by TS
//     return newArray;
// }

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]; // spread operator; JS feature supported by TS
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // Output: [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // TypeScipt will infer this correctly because it knows that the return type is of the same value as the input array.

// updatedArray[0].split(''); // tells me that this does not exist on type 'number'.



// Classes & Interfaces

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[]; // we added the 'private' keyword

    // In TypeScript, we should define our properties like above, and then ASSIGN values to those properties through the constructor defined below.


    constructor( // shorthand notation for defining certain properties and types of the class.
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ) {}


    enroll(courseName: string) { // added a method
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']); // calling the method and adding 'React' to the array of courses that the student is enrolled in.
    student.enroll('React');
    // student.listCourses(); we can NO LONGER access 'courses' because it is now PRIVATE. Output: Angular, React

    // student. We can access all our properties because they are 'public'; by default we can access them all. 

// student.courses(); Output: Angular, React


type Human = {
    firstName: string;
    age: number;

    greet: () => void; // this 'greet' method that takes NO parameters and returns nothing.
}

let Matthew: Human;

Matthew = {
    firstName: 'Matthew',
    age: 23,
    greet() {
        console.log('Hello!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!'); // the error goes away BECAUSE we are now correctly implementing the interface. They also force us to use a certain structure for our class.
    }
}

// Why do we have interfaces; 
    // They are an alterative and you can use them instead of the 'type' keyword, but has a feature that type keyword doesnt. Interfaces CAN be inplemented by classes, and when they are, they force classes to have that structure defined by the interface.
