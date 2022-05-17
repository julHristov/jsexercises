// function townPrinter(arr) {
//   for (const iterator of arr) {
//     const currentInfo = iterator.split(" | ");
//     const obj = {
//       town: currentInfo[0],
//       latitude: Number(currentInfo[1]).toFixed(2),
//       longitude: Number(currentInfo[2]).toFixed(2),
//     };
//     console.log(obj);
//   }
// }
// townPrinter([
//   "Sofia | 42.696552 | 23.32601",
//   "Beijing | 39.913818 | 116.363625",
// ]);
// townPrinter(["Plovdiv | 136.45 | 812.575"]);

function townPrinter(arr) {
  for (const iterator of arr) {
    const currentInfo = iterator.split(" | ");
    const town = currentInfo[0];
    const latitude = Number(currentInfo[1]).toFixed(2);
    const longitude = Number(currentInfo[2]).toFixed(2);
    const obj = {
      town,
      latitude,
      longitude,
    };
    console.log(obj);
  }
}
townPrinter(["Plovdiv | 136.45 | 812.575"]);
