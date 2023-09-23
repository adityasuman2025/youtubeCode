/*
    Currying is a technique, which allow us to break down a function that takes multiple arguments into a series of functions, each taking a single argument
*/

function add(a, b) {
    return a + b;
}

function curryAdd(a) {
    return function inner(b) {
        return a + b;
    }
}

const ans = curryAdd(4)(5);
// console.log("ans", ans);
// add(1, 2);
// curryAdd(1)(2);



// sum(1)(2)(3)....()
// 1+2+3+...
function sum(x) {
    return function(y) {
        console.log("x y", x, y);
        return y ? sum(x + y) : x;
    }
}
const ans2 = sum(1)(2)(3)(4)(5)();
console.log("ans2", ans2); // 1+2+3+4+5 = 15



// curryAltSum(1)(2)(3, 4)(5, 6, 7)(8)(9, 10)...()
// 1+2-3+4-5+6-7+8-9+10...