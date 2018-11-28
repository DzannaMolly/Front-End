// Batch #3 No.1

function flirt(numberOfTries, numberOfHitpoints){

    var girlPoints = 0;
    var tired = 10;
 
    for(var i = 1; i <= numberOfTries; i++ ){
 
        if( i % 5 == 0){
            girlPoints += 10;
            console.log("girl Points: ",girlPoints);
        } else if( i % 3 == 0 ){
            girlPoints += 5;
            console.log("girl Points: ",girlPoints);
        } else {
            girlPoints += 1;
            console.log("girl Points: ",girlPoints);
        }
 
        if(tired === i){
            tired += 10;
            girlPoints -= 12;
            console.log("Hitpoints",girlPoints)
        }
    }
 
    console.log("Points",girlPoints);
 
    if(numberOfHitpoints > girlPoints){
        console.log("girl failed");
    } else {
        console.log("girl wins");
    }
 
 }