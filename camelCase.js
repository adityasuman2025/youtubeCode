/*
    1. what is camelCase
    2. what our function will do with examples
    3. how to implement using diagram
    4. code logic
    5. code
    6. dry run on examples
*/

let str0 = "The gods have yet to make a man who lacks the patience for absolute power"; // normal string
let str1 = "Half       BLOOD   pRINCE"; // normal string with extra spaces

let str2 = "i_AM_IRON_man"; // snake case
let str3 = "tom-------mARVolo-------Riddle"; // hyphen
let str4 = "Spiderman---FAR    frOM______home"; // mix of all

let str5 = "AManHasNoName"; // somewhat camelCase
let str6 = "godOfThunder "; // already camelCase

let str7 = "undefined null NaN "; // string contains unexpected words
let str8 = 123; // not a string
let str9 = "123 456 str a987BOY"; // string with numbers
let str10 = "--a__b      c"; // string starting with symbols

// Half       BLOOD   pRINCE  ->  halfBloodPrince
// tom-------mARVolo-------Riddle  -> tomMarvoloRiddle

/*
    LOGIC
    1. will re[place] symbols like - and _ with space
    2. will break the sentence by space -> convert the string into array (strSplittedBySpaceArray)
    3. will remove empty string elements from the array (strSplittedBySpaceArray), will name this variable to strSplittedBySpaceExtraSpaceRemoved
        1. will check length of this array (strSplittedBySpaceExtraSpaceRemoved)
            a. if length is === 1,  then we will convert 1st letter of the word to smallcase, and other letters will go as it is
            b. if length is > 1
                1. loop through words of the array and 
                    1. if the index of the word is 0 -> convert that word to smallcase
                    2. if index > 0 -> convert first letter of that word to upperCase and other letters to lowercase
                2. convert the array to string and return it

*/
function camelCase(str) {
    if (!str || Number(str)) return str;

    const strSymbolsRemoved = str.replace(/-/g, " ").replace(/_/g, " ");
    const strSplittedBySpace = strSymbolsRemoved.split(" ");
    const extraSpaceRemoved = strSplittedBySpace.filter(item => item !== "");

    if (extraSpaceRemoved.length === 1) {
        const item = extraSpaceRemoved[0];
        return item[0].toLowerCase() + item.slice(1);
    } else {
        const res = extraSpaceRemoved.reduce((acc, item, idx) => {
            const ans = (idx === 0 ? item[0].toLowerCase() : item[0].toUpperCase()) + item.slice(1).toLowerCase();
            return acc + ans;
        }, "");

        return res;
    }
}

const ans = camelCase(str4);
console.log("ans", ans)

let obj = {
    [str0]: "1",
    [str1]: [
        { [str2]: 2 },
        3,
        {
            [str3]: "4",
            [str4]: [
                { [str5]: 5 }
            ]
        },
        ["6", 7]
    ],
    [str6]: {
        [str7]: {
            [str8]: 8,
            [str9]: {
                [str10]: "9"
            }
        }
    },
    5: "10"
};

const obj2 = [
    { i_d: 1 },
    { i_d: 2 },
    { i_d: 3 },
    "yo",
    {
        o_ne: "1",
        t_wo: "2",
        th_ree: [
            { i_d: 1 },
            { i_d: 2 },
        ]
    },
    ["sa", "a"]
]

let obj3 = [1, 2, 3];

let obj4 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3
}

function camelizeObject(obj) {

}

// const res = camelizeObject(obj);
// console.log("res", JSON.stringify(res))
