function createAssemblyLine(){
    return{
        hasClima: (myCar) => {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () =>{
                if(myCar.temp < myCar.tempSettings){
                    myCar.temp++;
                } else if(myCar.temp > myCar.tempSettings){
                    myCar.temp--;
                }
            }
        },
        hasAudio(myCar){
            myCar.currentTrack = { name: '', track: ''};
            myCar.nowPlaying = () => {
             console.log(`Now playing ${myCar.currentTrack.name} by ${myCar.currentTrack.artist}`);
            };
        },
        hasParktronic(myCar){
            myCar.checkDistance = (distance) => {
            let signal = '';
            if(distance < 0.5){
              signal = 'Beep!';
            }else if(distance < 0.25){
              signal = 'Beep! Beep!'
            } else if(signal < 0.1){
              signal = 'Beep! Beep! Beep!'
            }
            console.log(signal);
            };
        }

    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);