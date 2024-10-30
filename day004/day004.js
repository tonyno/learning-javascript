let children = [
  { name: "Tomáš Novák", age: 14 },
  { name: "Petra Svobodová", age: 16 },
  { name: "Karel Dvořák", age: 10 },
  { name: "Lenka Černá", age: 12 },
  { name: "Jirka Procházka", age: 9 },
  { name: "Veronika Veselá", age: 13 },
  { name: "Marek Kučera", age: 18 },
  { name: "Ivana Králová", age: 11 },
  { name: "Pavel Beneš", age: 17 },
  { name: "Michaela Fialová", age: 15 },
  { name: "Lukáš Pokorný", age: 12 },
  { name: "Klára Malá", age: 8 },
  { name: "Václav Kříž", age: 16 },
  { name: "Tereza Pospíšilová", age: 13 },
  { name: "Filip Hájek", age: 18 },
  { name: "Adéla Horáková", age: 14 },
  { name: "Ondřej Jelínek", age: 9 },
  { name: "Lucie Marešová", age: 10 },
  { name: "David Kadlec", age: 17 },
  { name: "Zuzana Machová", age: 11 },
  { name: "Jakub Blažek", age: 15 },
  { name: "Kristýna Zemanová", age: 8 },
  { name: "Martin Kolář", age: 18 },
  { name: "Eliška Sedláčková", age: 13 },
  { name: "Štěpán Krejčí", age: 12 },
  { name: "Simona Šimková", age: 9 },
  { name: "Jan Dostál", age: 14 },
  { name: "Barbora Urbánková", age: 16 },
  { name: "Vojtěch Čermák", age: 15 },
  { name: "Monika Říhová", age: 11 },
  { name: "Roman Řezníček", age: 17 },
  { name: "Alena Němcová", age: 10 },
  { name: "Dominik Hruška", age: 18 },
  { name: "Anna Krupičková", age: 12 },
  { name: "Matěj Trojan", age: 9 },
  { name: "Nikola Janoušková", age: 14 },
  { name: "Michal Vaněk", age: 15 },
  { name: "Kateřina Burešová", age: 13 },
  { name: "Radek Moravec", age: 10 },
  { name: "Sandra Ptáčková", age: 8 },
  { name: "Jaroslav Holub", age: 16 },
  { name: "Karolína Pavlíčková", age: 11 },
  { name: "Adam Svoboda", age: 18 },
  { name: "Markéta Konečná", age: 12 },
  { name: "Daniel Zahradník", age: 17 },
  { name: "Natálie Slámová", age: 9 },
  { name: "Patrik Matouš", age: 14 },
  { name: "Viktorie Čechová", age: 15 },
  { name: "Radim Hrubý", age: 10 },
];

// TASK: Create table of children with their ages, but with proper horizontal alignment
// Tomáš Novák      14
// Petra Svobodová  16

let maxLength = 0;

for (x = 0; x < children.length; x++) {
  const l = children[x].name.length
  if (maxLength < l) {
    maxLength = l
  }
}
console.log(maxLength);

function justify(name, maxLength) {
  for (let x = name.length; x <= maxLength; x++) {
    name = name + ' '
  }
  return name
}

for (x = 0; x < children.length; x++) {
  console.log(justify(children[x].name, maxLength) + children[x].age)
}

function mySort(children) {
  for (let z = 0; z < children.length; z++) {
    for (let x = 0; x < children.length - 1; x++) {
      if (children[x].age > children[x + 1].age) {
        let y = children[x + 1].age
        children[x + 1].age = children[x].age
        children[x].age = y
      }
    }
  }
  return children
}
const sort = mySort(children)
console.log(mySort(children))

for (x = 0; x < children.length; x++) {
  console.log(justify(children[x].name, maxLength) + children[x].age)
}

s = "Ahoj Tondo jak se mas"
console.log(s.split(' ')[1])


function fixName(children) {
  for (let z = 0; z < children.length; z++) {
    const nameParts = children[z].name.split(' ')
    // nameParts[0] == 'Sandra', nameParts[1] == 'Maskova'
    children[z].name = nameParts[1] + ' ' + nameParts[0]
  }
}

fixName(children)

function mySort2(children) {
  for (let z = 0; z < children.length; z++) {
    for (let x = 0; x < children.length - 1; x++) {
      const s1 = children[x].name
      const s2 = children[x + 1].name
      const tt = s1.localeCompare(s2, "cs", { sensitivity: "base" })
      if (tt == 1) {
        let y = children[x + 1].name
        children[x + 1].name = children[x].name
        children[x].name = y
      }
    }
  }
  return children
}

const sort2 = mySort2(children)
console.log(mySort2(children))

for (x = 0; x < children.length; x++) {
  console.log(justify(children[x].name, maxLength) + children[x].age)
}

const s1 = "a"
const s2 = "b"
const tt = s1.localeCompare(s2, "cs", { sensitivity: "base" })
console.log(tt)