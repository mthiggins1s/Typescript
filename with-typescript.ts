function add(a: number, b: number) { // you can add 'type' annotations (number) We make it clear that with typescript, that we want both parameters to be numbers.
    return a + b;
}

const result = add(2, 5); // Error: this argument says that the type 'string' is not assignable to parameter of type 'number'. We can use TypeScript to catch errors before we test code.

console.log(result);