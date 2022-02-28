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
    //Clouds
    //Mountains
    //Trees
    //Ground

    //House
    //Windows
    //Door

    //Fence
}
document.addEventListener('DOMContentLoaded', changeCanvasColor);