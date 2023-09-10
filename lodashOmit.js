const obj = {
    a: {
        b: {
            c: [1, 2, 3]
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
        b. if its length is > 1, omit(obj[thiskey], pathArr.slice(1))
*/
function omit(obj, path) {
    let pathArr = Array.isArray(path) ? path : path.replace("[", ".").replace("]", "").split(".");

    let thisKey = Number(pathArr[0]) || pathArr[0];

    if (pathArr.length === 1) {
        // BASE CASE
        if (Array.isArray(obj)) obj.splice(thisKey, 1);
        else delete obj[thisKey];
    } else {
        omit(obj[thisKey], pathArr.slice(1));
    }
}

omit(obj, "a");
// omit(obj, "a.b.d");
// omit(obj, "a.b.c[1]");
console.log("obj", JSON.stringify(obj));
