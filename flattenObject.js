/*
    1. what to implement
    2. what it does (with examples)
    3. how to implement using diagram
    4. code logic
    5. code
    6. dry run on example
*/

const obj = {
    skills: ["javaScript", "python", "react", "node"],
    name: {
        first: "aditya",
        last: "suman"
    },
    age: 23,
    college: {
        name: "IIT Patna",
        address: {
            city: "bihta",
            district: "patna",
            pin: 801101,
            locs: {
                lang: "123.1.2",
                lat: 90
            }
        },
        courses: ["CSE", "EE", "ME", "CHE", "CE", "MTE", "DS"]
    },
    projects: [
        {
            name: "project 1",
            details: {
                desc: "project 1 is magic",
                link: "https://example.com/project1",
                tech: ["node", "js", "react"]
            }
        },
        {
            name: "project 2",
            details: {
                desc: "project 2 is awesome",
                link: "https://example.com/project2",
                tech: ["python", "java", "html"]
            }
        }
    ]
};

/*
    1. lets define a varibale named newObj = {}
    2. create a function name flattenObjUtil inside the main function, where we will write the logic
        1. loop through keys of the obj, val = obj[key]
        2. let define a variable newKey = parentKey + "_" + key;
        3. check the type of val
            a. if type of val is object, flattenObjUtil(val, newKey);
            b. if type is not object, newObj[newKey] = val;
    3. return newObj
*/

function flattenObj(obj, parentKey = "") {
    let newObj = {};

    function flattenObjUtil(obj, parentKey = "") {
        Object.keys(obj).forEach(key => {
            const val = obj[key];
            const newKey = (parentKey ? parentKey + "_" : "") + key;

            if (typeof val === "object") {
                flattenObjUtil(val, newKey)
            } else {
                newObj[newKey] = val;
            }
        })
    }
    flattenObjUtil(obj, parentKey);

    return newObj;
}

const ans = flattenObj(obj);
console.log("ans", ans);