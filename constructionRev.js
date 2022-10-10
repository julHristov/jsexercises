function constReview(input){
    if(input.dizziness === true){
        input.levelOfHydrated = 0.1 * input.weight * input.experience + input.levelOfHydrated;
        input.dizziness = false;
    }
return input;
}
constReview({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
    console.log('-----');
    constReview({ weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true });
        console.log('-----');
        constReview({ weight: 95,
            experience: 3,
            levelOfHydrated: 0,
            dizziness: false });