const obj = {
    a: {
        b: {
            c: [[0, 100], 2, 3]
        }
    }
};

/*
    LOGIC

    1. check path if array or string, if it is string then we will convet it into array
    2. we will take the first element of the array and lets name it thisKey
    3. check the length of the array,
        1. if length it 1, return obj[thisKey]
        2. call our function again get(obj[thisKey], path.slice(1), defaultValue)
*/

function get(obj, path, defaultVal) {
    /*
        In replace function, if pattern (1st parameter) is a string, then only the first occurrence will be replaced
        to replace all occurances of the pattern, we need to use a regex (regular expression) with g flag
    */
    let pathArr = Array.isArray(path) ? path : path.replace(/\[/g, ".").replace(/\]/g, "").split(".");

    let thisKey = pathArr[0];

    if (pathArr.length === 1) {
        if (obj.hasOwnProperty(thisKey)) return obj[thisKey];

        return defaultVal;
    } else {
        if (obj.hasOwnProperty(thisKey)) return get(obj[thisKey], pathArr.slice(1), defaultVal);

        return defaultVal;
    }
}


const ans = get(obj, "a.b.c[0][1]", "DNE"); // 100
// const ans = get(obj, ["a", "b", "c", "2"], "DNE");
console.log("ans", ans);


// get(obj, 'a.b.c'); // [1,2,3]
// get(obj, 'a.b.c.0'); // [0, 100]
// get(obj, 'a.b.c[1]'); // 2
// get(obj, [a, b, c, 1]); // 2

// a.b.c[1] -> a.b.c.1
//pathArr = [a,b,c,1]