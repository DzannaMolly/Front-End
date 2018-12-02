window.hunt = function (bear) {
    const animal = randomAnimal(animals);
    const chanceOfKilling = Math.random();
    if (chanceOfKilling <= 0.3) {
        if (animal.name === 'wolf') {
            bear.weight = bear.weight * 0.9;
            bear.weight = bear.weight + (animal.weight / 2);
        }
        else {
            bear.weight = bear.weight + (animal.weight / 2);
        }
    }

}