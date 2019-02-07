/* 
  A Bloody Mess by Rob Glazebrook
  By default, canvas does not clear between frames. I'm taking advantage of that to create the running blood effect.
  This pen was inspired by Katy Decorah's BLOOD: https://codepen.io/katydecorah/pen/Lkogi
*/
var c = Sketch.create({autoclear: false}),
    drops = [],
    dropCount = 75,
    Drop = function() {
      this.x = random(0,c.width);
      this.radius = random(2.5,5);
      this.y = -this.radius - random(10,50);
      this.vy = this.radius/3;
      this.r = ~~random(240,255);
      this.g = ~~random(0,20);
      this.b = ~~random(0,20);
    }; 

c.update = function() {
  var d = drops.length;
  while(d < dropCount) {
    var drop = new Drop();
    drops.push(drop);
    d++;
  }
  while(d--) {
    var drop = drops[d];
    drop.y += drop.vy;
    if(drop.y - drop.radius > c.height) {
      drops.splice(d,1);
    }
  }
}

c.draw = function() {
  var d = drops.length;
  while(d--) {
    var drop = drops[d];
    c.beginPath();
    c.fillStyle = 'rgba('+drop.r+','+drop.g+','+drop.b+',.8)';
    c.arc(drop.x,drop.y,drop.radius,0,TWO_PI);
    c.fill();
  }
} 