function cityTaxes(name, population, treasury) {
   const result = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(){
        result.treasury+= Math.floor(result.population * result.taxRate);
    },
    applyGrowth(percentage) {
        result.population+= Math.floor(result.population * percentage / 100);
    },
    applyRecession(percentage){
        result.treasury-= Math.floor(result.treasury * percentage / 100);
    }
   };
   return result;
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
const asString = JSON.stringify(city);
console.log(asString);