// function demo(input) {
//   const heroObjects = [];
//   for (const heroesData of input) {
//     const [name, level, item] = heroesData.split(" / ");
//     const splitedItem = item.split(", ");
//     splitedItem.sort((a, b) => a.localeCompare(b));

//     const heroes = {
//       name: name,
//       level: +level,
//       item: splitedItem,
//     };
//     heroObjects.push(heroes);
//   }
//   const sortedHeroesByLevel = heroObjects.sort((a, b) => a.level - b.level);
//   sortedHeroesByLevel.forEach((heroObjects) => {
//     console.log(`Hero: ${heroObjects.name}`);
//     console.log(`level => ${heroObjects.level}`);
//     console.log(`items => ${heroObjects.item}`);
//   });
// }
// demo([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
// ]);

function demo(input) {
  const heroObjects = [];
  for (const heroesInfo of input) {
    const [name, level, items] = heroesInfo.split(" / ");
    const splitedItem = items.split(", ").sort((a, b) => a.localeCompare(b));

    const heroes = {
      name: name,
      level: +level,
      items: splitedItem,
    };
    heroObjects.push(heroes);
  }
  const sortedHeroesByLevel = heroObjects.sort((a, b) => a.level - b.level);
  sortedHeroesByLevel.forEach((heroObjects) => {
    console.log(`Hero: ${heroObjects.name}`);
    console.log(`level => ${heroObjects.level}`);
    console.log(`ietms => ${heroObjects.items}`);
  });
}
demo([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
