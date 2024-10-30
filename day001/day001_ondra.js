let name = "Ondra";

name = "Majda";

name = name + " Kmochova";

console.log(name);

let age = 8;

console.log(name + " is " + age + " years old");
console.log(name, " is ", age, " years old");

let summary = name + " is " + age + " years old";
console.log(summary);

age = age + 1;
summary = name + " is " + age + " years old";
console.log(summary);

if (age < 18) {
  console.log(name, "cannot drink alcohol");
}

if (age % 10 == 0) {
  console.log(name, " ma kulatiny");
} else {
  console.log(name, "nema kulatiny");
}

//
// Functions

function vypisNaObrazovku(text) {
  console.log(text);
}

vypisNaObrazovku("Ahoj clovece");

// TASK: Ondrova nekolikata funkce

function checkEmailAndPassword(email, password) {
  // email = 'tonda@kmoch.cz', password = 'auto'
  if (email == "tonda@kmoch.cz" && password == "auto") {
    console.log("Heslo je v poradku");
  } else {
    console.log("Heslo neni v poradku");
  }
}

checkEmailAndPassword("tonda@kmoch.cz", "auto");

// Function returning some value

function sumValues(a, b) {
  return a + b;
}

const sum = sumValues(30, 10);
console.log(sum);

// TASK: ABS
// myAbs(10) -> 10
// myAbs(-10) -> 10

function myAbs(n) {
  if (n >= 0) return n;
  if (n <= 0) return n - n - n;
}
console.log(myAbs(-10));
