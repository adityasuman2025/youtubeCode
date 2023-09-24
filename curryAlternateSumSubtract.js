/*
1. what to implement
2. what it does (with examples)
3. how to implement using diagram
4. code logic
5. code
6. dry run on example

*/

// altSumSubtract(1)(2)(3, 4)(5, 6, 7)(8)(9, 10)...()
// 1+2-3+4-5+6-7+8-9+10...

/*
LOGIC

1. create a global varibale named isSum (boolean)
2. create a function altSumSubtract(...args1)
3. define a variable named sum = args1[0];
4. will create a inner function and retuern it from the altSumSubtract function
5. function inner(...args2)
6. will loop through args1 array and do alternate sum/subtraction, the updated  value be stored in sum and update the isSum flag
7. will loop through args2 array and do alternate sum/subtraction, the updated  value be stored in sum and update the isSum flag
8. if args2.length > 0
    a. will return altSumSubtract(sum)
    b else return sum
*/

let isSum = true;
function altSumSubtract(...args1) {
    let sum = args1[0];

    return function inner(...args2) {
        for (let i = 1; i < args1.length; i++) {
            if (isSum) sum = sum + args1[i];
            else sum = sum - args1[i];

            isSum = !isSum;
        }

        for (let i = 0; i < args2.length; i++) {
            if (isSum) sum = sum + args2[i];
            else sum = sum - args2[i];

            isSum = !isSum;
        }

        return args2.length ? altSumSubtract(sum) : sum
    }
}


// 1+2-3+4-5+6-7+8-9+10 = 7
const ans = altSumSubtract(1)(2)(3, 4)(5, 6, 7)(8)(9, 10)();
console.log("ans", ans);
