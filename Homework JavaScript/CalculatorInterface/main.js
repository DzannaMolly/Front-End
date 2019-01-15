function startupWebpage() {
    var page = new Calculator();
    page.renderAll();
}

startupWebpage(); //ova ni e za sozdavanje na interfejsot

//function Calculator(){
//     this.mainDisplay = [];
//     this.addValue = function(val){
//        this.mainDisplay.push(val);
//     }
//     this.removeValue = function(){
//         this.mainDisplay.pop();
//     }
//     this.checkDisplay = function(){
//         return parseInt(this.mainDisplay.join(''));
//     }

// function evenCallback(){
//     calculator.addValue(event.target.id);
//     var displayValue = calculator.checkDisplay();
//     $('mainDisplay).html(displayValue);
// }

// blehton.on('click',eventCallback);

//ova e primer kako da stavime funkcionalnost na kalkulatorot