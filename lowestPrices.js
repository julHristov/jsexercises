function lowestPrice(input){
    const products = [];
    while(input.length > 0){
        let [town, product, price] = input.shift().split(' | ');
        price = Number(price);
        if(products.filter(x => x.product === product).length > 0){
            const obj = products.find(x => x.product === product);
            if(obj.price > price){
                obj.price = Number(price);
                obj.town = town;
            }
        }else{
            const obj = {town, product, price};
            products.push(obj);
        }
    }
for(let product of products){
    console.log(`${product.product} -> ${product.price} (${product.town})`);
}
}
lowestPrice(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000']);