changeCanvasColor = function () {
    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");

    //Background Color
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Caption Text
    context.font="30px Arial";
    context.fillStyle = "black";
    context.fillText("House Cartoon",10,30);

    //Sun
    context.beginPath();
    context.arc(700, 100, 80, 0, Math.PI * 2, true);
    context.fillStyle="yellow";
    context.fill();

    //Cloud
    context.beginPath();
    context.arc(100, 100, 40, 0, Math.PI * 2, true);
    context.arc(60, 120, 40, 0, Math.PI * 2, true);
    context.arc(100, 130, 40, 0, Math.PI * 2, true);
    context.arc(140, 120, 40, 0, Math.PI * 2, true);
    context.fillStyle="white";
    context.fill();

    //Mountain
    context.beginPath(); 
    context.moveTo(250, 100); 
    context.lineTo(25, 480); 
    context.lineTo(480, 480); 
    context.fillStyle="gray";
    context.fill(); 

    //Tree
    context.beginPath(); 
    context.moveTo(500, 200); 
    context.lineTo(450, 300); 
    context.lineTo(550, 300); 

    context.moveTo(500, 250); 
    context.lineTo(430, 400); 
    context.lineTo(570, 400); 
    context.fillStyle="green";
    context.fill();

    context.beginPath(); 
    context.fillStyle="brown";
    context.fillRect(485,400,30,80);
    context.fill();

    //Ground
    context.fillStyle = "darkgreen";
    context.fillRect(0, 480, canvas.width, canvas.height);

    //House
    context.beginPath(); 
    context.fillStyle="red";
    context.fillRect(700,280,200,200);
    context.fill();

    context.beginPath(); 
    context.moveTo(800, 200); 
    context.lineTo(700, 280); 
    context.lineTo(900, 280); 
    context.fillStyle="darkred";
    context.fill(); 

    //Windows
    context.beginPath(); 
    context.fillStyle="orange";
    context.fillRect(720,300,50,50);
    context.fillRect(830,300,50,50);
    context.fill();

    //Door
    context.beginPath(); 
    context.fillStyle="pink";
    context.fillRect(775,380,50,100);
    context.fill();

    //Fence
    context.beginPath(); 
    context.fillStyle="tan";
    for (let i = 600; i < 1000; i=i+20) {
        context.fillRect(i,430,10,50);
    }
    context.fill();
}
document.addEventListener('DOMContentLoaded', changeCanvasColor);