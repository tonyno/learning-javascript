// Array (pole)

let deti = ["Tonik", "Ondra", "Mata", "Majda"];
console.log(deti);

// Length

console.log("Delka pole je", deti.length);

// Some functions

console.log(deti.toString());

// Accessing items in array
console.log("Prvni dite je", deti[0]);
console.log("Posledni dite je", deti[deti.length - 1]);

// Cycles (for)

for (let x = 0; x < 10; x++) {
  console.log(x);
}

// TASK: Rename child with name 'Ondra' to 'Bubak'

for (x = 0; x < deti.length; x++) {
  if (deti[x] == "Ondra") {
    console.log("Nasel jsem Ondru");
    deti[x] = "bubacek nas Ondjasek";
  }
}

// TASK: Print all children using for cycle

for (x = 0; x < deti.length; x++) {
  console.log("Dite cislo", x, "je...");
  console.log(deti[x]);
}

// Objects
const person = { name: "Tonda", age: 13 };
console.log(person);
console.log(person.name);
console.log(person["name"]);
person.age++;
console.log(person);

// Array of objects
const children = [
  { name: "Tonik", age: 14 },
  { name: "Ondra", age: 10 },
  { name: "Mata", age: 8 },
  { name: "Majda", age: 6 },
];

// TASK: Write to the console all the names of children
for (x = 0; x < children.length; x++) {
  console.log(children[x].name);
}

// TASK: Count the total age of all the children
