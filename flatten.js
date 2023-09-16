/*
    1. what to implement
    2. what it does (with examples)
    3. how to implement using diagram
    4. code logic
    5. code
    6. dry run on example
*/

const arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, [12, [13, [14, [15, [16]]]]], 17, [18, 19, 20]],
    [[[{ name: "hi" }]], { roll: 1 }]
];
const arr2 = [[], [[[]]], [[]], []];

/*
    LOGIC
    1. check the depth
        1. if depth is 0, then will return arr
        2. depth > 0, 
            a. creata a variable named newArray = [], 
            b. loop though all the elements of the arr
                1. check the type of element,
                    a. if type is Array, flatten(element, depth - 1), we will push this recusrive function call values in the newArray
                    b. if type is not array, push the element in newArray
*/
function flatten(arr, depth = 0) {
    if (depth === 0) return arr;

    let newArray = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            const out = flatten(element, depth - 1);;
            newArray.push(...out); // [1,2,3];
        } else {
            newArray.push(element);
        }
    });

    return newArray;
}

const ans = flatten(arr, 1);
console.log("original arr", arr);
console.log("flatten arr", ans);
