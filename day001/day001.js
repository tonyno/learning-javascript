console.log("Hello")

// Variables (promenne)

let a = 30;

console.log(a);
console.log("a");

// TEST: Create two variables - b, c. Put 20 to b, 30 to c and print on console the sum b+c.

let b = 20;
let c = 30;

console.log(b + c);

// console.log has multiple parameters

console.log("Sum of ", b, " and ", c, " is ", b + c)

// You can sum text and number....

console.log("Hello" + 20)
console.log("Hello" + ' whats app')

// Constants

const d = 50;
console.log("Constant is ", d)

// Conditions - if

if (d < 90) {
    console.log("Variable d is smaller than 90, actually it is ", d)
}

// TEST: Condition if d < 90 and b >= 0
if (d < 90 && b >= 0) {
    console.log('Variable, d is smaller than 90')
    console.log('b is bigger than 0 or equal ')
}

if (d < 90 || b >= 0) {
    console.log('d is  smaller 90 or b is 0 or bigger')
}
let j = 2500;
if (d + d != j) {
    console.log('d+d is not 2500')
}

// Modulo (zbytek po deleni) - %
// 5 % 3 == 2

if (5 % 3 == 2) {
    console.log('jo')
}

// functions

function sumValues(a, b) {
    return a + b
}

console.log(sumValues(30, 50))

// variable - boolean
const isItTrue = (3 == 5)
console.log(isItTrue)

// TEST: create function that returns true, if the number is even number
function itIsEven(c) {
    const isItTrue = (c % 2 == 0)
    return isItTrue
}
console.log(16, ' is even', itIsEven(16))
console.log(17, ' is even', itIsEven(17))

// TEST: create function testEven(c) that will print c, " is even ", true/false

function testEven(c) {
    console.log(c, 'is even', itIsEven(13))
}
testEven(13)

// TEST: create function testNumber(c) that will tell you if the number is odd or even
// testNumber(5) will print "5 is odd"
// testNumber(6) will print "6 is even"

function testNumber(c) {
    if (itIsEven(c)) {
        console.log(c, 'is even')
    } else {
        console.log(c, 'is not even')
    };
}
testNumber(6);

function testNumber2(c) {
    let result;
    if (itIsEven(c)) { result = 'even' } else { result = 'odd' }
    console.log(c, "is", result);
}

testNumber2(15)

function testNumber3(c) {
    console.log(c, "is", itIsEven(c) ? "even" : "odd")
}

testNumber3(15)
