// var movie = {
//     title: "Terror",
//     actors: 20,
//     stunts: 5,
//     rrated: true,
//     goreElements: [' blood', 'murder', 'gore'],

//     checkAvailability: function(){
//         return this.stunts + this.goreElements;
//     }
// };

// var movie = new Object();

// movie.title = "Terror";
// movie.kills = function(){};

// function Cat(name, color){
//     this.name = name;
//     this.color = color;
//     this.meow = function(){
//         console.log(this.name, " is meowing hungrily!");
//     }
// }

// var milica = new Cat("Milica", "Ginger");

// var golemaMaca = new Cat("Maca", "Teget-zuta");

// var kuce = new Cat("Џорџ", "Maskirna");

// Create JavaScript Object with Constructor 
// function Movie(title, genre){
//     this.title = title;
//     this.genre = genre;
//     this.kill = function(){
//         console.log(this.title, " is gonna be a blockbuster");
//     }
// }

// var Slasher = new Movie("Ripper", "Slasher");
// var Paranormal = new Movie("GhostStories", "Paranormal");
// var Survival = new Movie("HungerGames", "Survival");



function fight2(){
    var human = {
        hitPoints : 550,
        damage : humanAttack(),
    };
    var orc = {
        hitPoints : 720,
        damage : orcAttack(),
    };
    
    human.attack = function(attackable){
        attackable.hitPoints = attackable.hitPoints - this.damage;
        return true;
    };
    orc.attack = function(attackable){
        attackable.hitPoints = attackable.hitPoints - this.damage;
        return true;
    };
    while(human.hitPoints > 0 && orc.hitPoints>0)
    {
        human.attack(orc);
        orc.attack(human);
        console.log("Human " + human.hitPoints,"  ","Orc " + orc.hitPoints);
    }
}

