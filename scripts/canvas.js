var canvas = document.getElementById('sdfCanvas');
//var heightRatio = 0.48;
var heightRatio = 0.5;
canvas.height = canvas.width * heightRatio;
var ctx = canvas.getContext('2d');


var pause = 0;
var dx = 10 ;
var dy = 10 ;
var x = 10;
var y = 50;
function animate() {
    //if (pause != 300){
         requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    //};    
          
   for (var i = 1; i < 20; i++){           
        var radius = 0.5;       
        ctx.fillStyle = '#d8c99b';
        ctx.fillRect(x, y, 0.4, 100);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
        if (x > canvas.width || x < 0){
            dx = -dx;
        }
        if (y  > canvas.height || y  < 30 ){
            dy = -dy;
        }
        x += dx;
        y += dy;
        
    }
    pause += 1;  
}
animate();

//triangle
// var twidth = 225;
// var theight = 205;
// var padding = 20;
// ctx.beginPath();
// ctx.moveTo(padding + twidth / 2, padding);
// ctx.lineTo(padding + twidth, theight + padding);
// ctx.lineTo(padding, height + padding);
// ctx.closePath();
// ctx.shadowBlur = 10;
// ctx.shadowColor = 'black';
// // Create fill gradient
// var gradient = ctx.createLinearGradient(0, 0, 0, theight);
// gradient.addColorStop(0, "#ffc821");
// gradient.addColorStop(1, "#faf100");
// ctx.fillStyle = gradient;
// ctx.fill();

