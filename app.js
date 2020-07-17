// 5 variables of different data types
// string
let aString = "Hello i am a string";
console.log(aString);
// number
let aNumber = 13;
console.log(aNumber);
// array
const anArray = ["boom", "boom", "boom"];
console.log(anArray)
// boolean
let aBoolean = true;
console.log(aBoolean);
// object (4 different key-value pairs) [string], [number], [array], [boolean]
const anObject = {
    name: "Mac",
    age: 25,
    favoriteFoods: ["cheese", "wine", "beans"],
    readyToRumble: true
}
console.log(anObject);

// make some different functions 
// one function needs to pass in an array
function anArrayFunc(passedArray) {
    console.log(passedArray)
}
anArrayFunc(anArray);

// one needs to pass in a callback
function callbackFuncToPass() {
    console.log("Oh hey");
}
function aCallbackFunc(passedCallback) {
    passedCallback();
    console.log("We passed a callback function");
}
aCallbackFunc(callbackFuncToPass);

// ...string
function aStringFunc(passedString) {
    console.log(passedString);
}
aStringFunc(aString);

// ...object
function anObjectFunc(passedObject) {
    console.log(passedObject);
}
anObjectFunc(anObject);

// ...boolean
function aBooleanFunc(passedBoolean) {
    console.log(passedBoolean);
}
aBooleanFunc(aBoolean);

function displayCoolBikes(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let bike = array[i];

        if (bike.length > 7) {
            result.push(bike);
        }
    }
    return result;
}

// console.log(displayCoolBikes(anArray));

function removeFromArray(callback, array) {
    let result = callback(array)[0];
    console.log(result);
}

function printaString(string) {
    console.log(string);
}
printaString(aString)

function printFavorite(object) {
    console.log(object.favoriteFoods);
}
printFavorite(anObject);

function printEachFavorite(object) {
    object.favoriteFoods.forEach(eachFave => {
        console.log(eachFave);
    })
}
printEachFavorite(anObject);

function doesThisWork(boolean) {
    if (boolean) {
        console.log("this works");
    } else {
        console.log("this does not works");

    }
}
doesThisWork(aBoolean);