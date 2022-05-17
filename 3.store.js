function supplies(stockArr1, stockArr2) {
  const stockArr1L = stockArr1.length;
  const stockArr2L = stockArr2.length;

  const currentStock = {};
  for (let i = 0; i < stockArr1L; i += 2) {
    const product = stockArr1[i];
    currentStock[product] = Number(stockArr1[i + 1]);
  }
  for (let i = 0; i < stockArr1L; i += 2) {
    const currentProduct = stockArr2[i];
    if (!currentStock.hasOwnProperty(currentProduct)) {
      currentStock[currentProduct] = 0;
    }
    currentStock[currentProduct] += Number(stockArr2[i + 1]);
  }
  console.log(currentStock);
}
supplies(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
