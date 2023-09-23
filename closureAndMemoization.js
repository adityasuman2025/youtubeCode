/*
    Closure happens when a function retains access to variables of its outer (enclosing) function, even after that outer function has completed execution
   
    Closure is a function bundled together with reference to its surrounding state (lexical environment)
   
    When a function is returned from a another function, it still remember the references it was pointing too, its not just that function alone is returned but its closure is returned.
    It remembers reference of the variable but not the value.

    
    uses/applications:
    1. memoization
    2. currying
    3. debounce/throttle
    4. once function
    5. Data hiding & encapsulation
*/

function outer() {
    let greet = "Hello world";

    return function inner() {
        console.log(greet);

        greet = "Hey there";
    }
}

const runFun = outer();
// runFun();
// runFun();


// memoization
function multiply(a, b) {
    console.log("multiply called for:", a, b);

    return a * b;
}

function memoizeIt(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args); // "[2,3]"

        if (cache.hasOwnProperty(key)) {
            return cache[key];
        } else {
            cache[key] = func.call(this, ...args); // cache -> {"[2,3]": 6}
            return cache[key];
        }
    }
}

// const val1 = multiply(2, 3);
// const val2 = multiply(2, 3);
// const val3 = multiply(2, 3);

// console.log("val1", val1)
// console.log("val2", val2)
// console.log("val3", val3)


const optimisedMultiply = memoizeIt(multiply);

const val1 = optimisedMultiply(2, 3);
const val2 = optimisedMultiply(2, 3);
const val3 = optimisedMultiply(2, 3);

console.log("val1", val1)
console.log("val2", val2)
console.log("val3", val3)

/*
    function (a,b,c....1000) {

    }

    function (...args) {
        const a = args[0];
        cont last = args[args.length - 1];
    }
*/