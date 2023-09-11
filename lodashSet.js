const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    },

    // c: {
    //     b: {
    //         a: "Hi"
    //     }
    // }
};

/*
    LOGIC
    1. we will convert the path string to path Array
    2. we will take the 1st element of this path array and store it in a variable named thisKey
    3. we will take the 2nd element of this path array and store it in a variable named nextKey
    4. we will check the length of path Array
        1. BASE CASE of recursion: if length is 1 obj[thisKey] = value
        2. check if thisKey exist in obj or not
            a. if it does not exist, 
                1. if the nextKey is a number, obj[thisKey] = []
                2. if the nextKey is a string, obj[thisKey] = {}
            b. if it exist, we will call our set function recursively set(obj[thisKey], pathArray.slice(1), value)

*/

function set(obj, path, value) {
    /*
        In replace function, if pattern (1st parameter) is a string, then only the first occurrence will be replaced
        to replace all occurances of the pattern, we need to use a regex (regular expression) with g flag
    */
    const pathArray = Array.isArray(path) ? path : path.replace(/\[/g, ".").replace(/\]/g, "").split(".");

    const thisKey = pathArray[0]; // "4" 4 //"c"
    const nextKey = pathArray[1];
    const thisKeyAsNoOrStr = Number(thisKey) || thisKey;

    if (pathArray.length === 1) {
        obj[thisKeyAsNoOrStr] = value;
    } else {
        if (!obj.hasOwnProperty(thisKey)) {
            obj[thisKeyAsNoOrStr] = isNaN(Number(nextKey)) ? {} : [];
        }

        set(obj[thisKeyAsNoOrStr], pathArray.slice(1), value);
    }
}


set(obj, 'c.b.a', 'Hi');
set(obj, 'a.b.c[4][0]', 'Hello');
// set(obj, 'a.c.d.01.e.0.f', 'Bye');
console.log("obj", JSON.stringify(obj));


// 'a.b.c[4]' -> a.b.c.4
// pathArray = [a, b, c, 4];

// Number("c") = isNaN(NaN) = true
// Number("1") = isNaN(1) = false

// obj["1"] = "some value";
// obj[1] = "some value";