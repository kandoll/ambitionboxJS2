var canvas = document.querySelector("canvas");
var w = (canvas.width = 500);
var h = (canvas.height = 400);
var c = canvas.getContext("2d");

//drawing rectangle

//c.fillRect(100,100,500,500);
//drawing line

// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.strokeStyle="green";
// c.stroke();

//drawing a circle

// for(var i=0;i<5;i++){
//     var x=Math.random()*window.innerWidth;
//     var y=Math.random()*window.innerHeight;
//         c.beginPath();
//         c.arc(x,y,30,0,Math.PI*2,false);
//         c.stroke();
//         c.strokeStyle="red";
//     }

//creating a circle

window.addEventListener('onclick',function(event){
    
console.log("hello");
    
})
function Circle(x, y,dx,dy,radius) {
  this.x = x;
  this.y = y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;

  this.draw = function() {

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
    c.fillStyle="green";

    c.fill();

  };

  this.update=function(){

    if (this.x + this.radius > w || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }
    
      if (this.y + this.radius > h || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
    
      this.x += this.dx;
      this.y += this.dy;
    this.draw();

  }

}


var circleArray=[];

 for(var i=0;i<10;i++){
    var radius = 10;

var x = Math.random() * (w-radius*2)+radius;
var dx = 3;
var y = Math.random() * (h-radius*2)+radius;
var dy = 3;
circleArray.push(new Circle(x,y,dx,dy,20));
// var circle = new Circle(200,200,3,3,30);



 }

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, w, h);
//   circle.update();

for(var i=0;i<circleArray.length;i++){
    circleArray[i].update();
}


}

animate();
