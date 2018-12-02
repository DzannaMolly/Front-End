const animals = {
    1: {
        name: 'wolf',
        weight: 120,
    },
    2: {
        name: 'dear',
        weight: 150,
    },
    3: {
        name: 'fox',
        weight: 50,
    },
    4: {
        name: 'boar',
        weight: 90,
    }
}

function survivingTheWinter() {

    const bear = new Bear(600, 750, 675);
    for (let i = 0; i < 30; i++) {
        console.log('weight per day',bear.weight);
        if (bear.weight >= bear.deathWeight) {
            bear.bearIsDead = true;
            break
        }
        if (bear.weight >= bear.imobilizedWeight) {
            bear.isFat = true;
        }
        if (i > 20) {
            const hunterAppears = (Math.random() < 0.05);
            if (hunterAppears && bear.isFat) {
                bear.bearIsDead = true;
                break
            }
            else if (hunterAppears) {
                bear.weight = bear.weight * 0.7;
            }
        }
        if (bear.isFat) {
            i++;
            bear.weight = bear.weight * 0.8;
            bear.isFat = false;
        }
        hunt(bear);
    }
    if (bear.bearIsDead) {
        return 'Yogi is dead';
    }
    else {
        return 'Yogi lived, and Yogi weighs:' + bear.weight;
    }

};

survivingTheWinter();

