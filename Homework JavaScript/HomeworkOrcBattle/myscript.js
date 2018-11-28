// Batch #3 No.2

function battle(){

    var orcHitpoints = 720;
    var humanHitpoints = 550;
    var orcDamage = [23,24,25,26,27,28,29,30,31,32,33,34,35];
    var humanDamage = [18,19,20,21,22,23,24,25,26,27];
    var orcArmor = 5;
    var humanShieldArmor = 9;

    while(orcHitpoints > 0 && humanHitpoints > 0){           
      
        // orcHitpoints : 720 = 720 - (18- 5);        
        orcHitpoints = orcHitpoints - (humanDamage[randomIndex(humanDamage.length)] - orcArmor);
        humanHitpoints = humanHitpoints - (orcDamage[randomIndex(orcDamage.length)] - humanShieldArmor);   


    }

    if(orcHitpoints <= 0 && humanHitpoints <= 0) { // proverka Dali se mrtvi i orkata i covekot, 
        console.log('Both die, no one wins.');
        return 'Both die, no one wins.';
    } else if(orcHitpoints <= 0){ // proverka dali e mrtva orkata kade sto nejziniot zivot e < ili = na 0 a covekot e ziv i pobeduva
        console.log('Human wins.');
        return 'Human wins.';          
    } else if(humanHitpoints <= 0){ // proverka dali e mrtov covekot kade sto negoviot zivot e < ili = na 0 a orkata e ziva i pobeduva
        console.log('orcWins');
        return 'orcWins';
    }

    function randomIndex(arrayLenght){
        return Math.floor(Math.random()*arrayLenght);
    }
}