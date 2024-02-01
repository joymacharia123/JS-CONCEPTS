// let person = {
//     name:'John'
//     age:'30'
//     school:'Zindua School'
//     personalities:['kind','humble','hardworking']
//     hobbies:[
//         indoor:['reading','cooking']
//         outdoor:['swimming','hardworking']
//     ]

// }

// console.log(person.name)

// let person=[
//     {
//         name='alicia'
//         age='30'
//         city='nairobi'
//     },
//     {},
//     {},

// ]

let person = [
  { Name: "Alice", Age: 25, City: "New York" },
  { Name: "Bob", Age: 30, City: "Chicago" },
  { Name: "Charlie", Age: 35, City: "New York" },
  { Name: "Dave", Age: 40, City: "Chicago" },
];

function groupBy(arr, property) {
  let grouped = {};
  for (let i = 0; i < arr.length; i++) {
    let person = arr[i];
    let key = person[property];

    if (!grouped[key]) {
      grouped[key] = [person];
    } else {
      grouped[key].push(person);
    }
  }
  return grouped;
}

console.log(groupBy(person, "City"));