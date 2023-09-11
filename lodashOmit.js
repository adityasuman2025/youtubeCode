const obj = {
    a: {
        b: {
            c: [1, [21, 22], 3]
        }
    }
};

/*
    LOGIC
    1. check path, if is not array then convert it into an array by splitting by . (pathArr)
    2. store first element of this array in thiskey
    3. check the length of the pathArr
        a. BASE CASE of recusion: if length is 1, 
            1. if obj is object: delete obj[thisKey]
            2. if obj is array: obj.splice(thisKey, 1)
        b. if its length is > 1, then will check if thisKey exists in obj or not // THIS STEP WAS MISSED IN THE VIDEO
            1. if it exists: then will run our function recursively, omit(obj[thiskey], pathArr.slice(1))
            2. do nothing
*/
function omit(obj, path) {
    /*
        In replace function, if pattern (1st parameter) is a string, then only the first occurrence will be replaced
        to replace all occurances of the pattern, we need to use a regex (regular expression) with g flag
    */
    let pathArr = Array.isArray(path) ? path : path.replace(/\[/g, ".").replace(/\]/g, "").split(".");

    let thisKey = Number(pathArr[0]) || pathArr[0];

    if (pathArr.length === 1) {
        // BASE CASE
        if (Array.isArray(obj)) obj.splice(thisKey, 1);
        else delete obj[thisKey];
    } else {
        if (obj.hasOwnProperty(thisKey)) { // THIS STEP WAS MISSED IN THE VIDEO
            omit(obj[thisKey], pathArr.slice(1));
        }
    }
}

// omit(obj, "a.d.e");
// omit(obj, "a");
// omit(obj, "a.b.d");
omit(obj, "a.b.c[1][1]");
console.log("obj", JSON.stringify(obj));
