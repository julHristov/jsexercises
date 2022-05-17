// function listOfEmployees(arr) {
//   const list = [];
//   class List {
//     constructor(name, personalNum) {
//       this.name = name;
//       this.number = personalNum;
//       this.print = () =>
//         console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const currentName = arr[i];
//     const personalNum = arr[i].length;
//     list.push(new List(currentName, personalNum));
//   }
//   list.forEach((element) => element.print());
// }
// listOfEmployees([
//   "Silas Butler",
//   "Adnaan Buckley",
//   "Juan Peterson",
//   "Brendan Villarreal",
// ]);

// function listOfEmployees(arr) {
//     for (const iterator of arr) {
//       const currentName = iterator;
//       const personalNumber = iterator.length;
//       console.log(`Name: ${currentName} -- Personal Number: ${personalNumber}`);
//     }
//   }
//   listOfEmployees([
//     "Silas Butler",
//     "Adnaan Buckley",
//     "Juan Peterson",
//     "Brendan Villarreal",
//   ]);

// function demo(input) {
//   for (const employeeName of input) {
//     const list = {
//       name: employeeName,
//       number: employeeName.length,
//     };
//     console.log(`Name: ${list.name} -- Personal Number: ${list.number}`);
//   }
// }
// demo(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
//
// function demo(input) {
//   input.forEach((element) => {
//     console.log(`Name: ${element} -- Personal Number: ${element.length}`);
//   });
// }
// demo(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);

function demo(array) {
  array.forEach((element) => {
    console.log(`Name: ${element} -- Personal Number: ${element.length}`);
  });
}
demo(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
