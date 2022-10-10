function calories(input){
    const obj = {};
    for(let i = 0; i < input.length; i+=2){
        // console.log();
     obj[input[i]] = Number(input[i + 1]);   
    }
    console.log(obj);
}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])