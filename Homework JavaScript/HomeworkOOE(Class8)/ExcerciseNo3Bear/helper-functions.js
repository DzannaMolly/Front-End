window.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
}

window.randomAnimal = function (animals) {
    const randomIndex = getRandomNumber(1, 4);
    return animals[randomIndex];
}