function carFactory(input) {
    const res = {};
    res.model = input.model;
    if (input.power <= 90) {
        res.engine = {
            power: 90,
            volume: 1800
        }
    } else if (input.power <= 120) {
        res.engine = {
            power: 120, volume: 2400
        }
    } else if (input.power <= 200) {
        res.engine = {
            power: 200, 
                volume: 3500
        }
    }
    if(input.carriage === 'hatchback'){
      res.carriage = {
        type: 'hatchback',
        color: input.color
      };
    }else if(input.carriage === 'coupe'){
        res.carriage = {
            type: 'coupe',
            color: input.color
          };
    }
    if(input.wheelsize % 2 === 0){
        let wheels = --input.wheelsize;
        res.wheels = [wheels, wheels, wheels, wheels];
    }else{
        wheels = input.wheelsize;
        res.wheels = [wheels, wheels, wheels, wheels];
    }
    return res;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
console.log('----');
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})