var fruit = [
	{name:"Apple", quantity:20, color:"red"},
	{name:"Orange", quantity:10, color:"orange"},
	{name:"Banana", quantity:15, color:"yellow"},
	{name:"Kiwi", quantity:3, color:"green"},
	{name:"Blueberry", quantity:5, color:"blue"},
	{name:"Grapes", quantity:8, color:"purple"}
];

displayChart = function() {
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

for (let i = 0; i < fruit.length; i++) {
	for (let j = 0; j < fruit[i].quantity; j++) {
  		ctx.fillStyle = fruit[i].color;
		ctx.fillRect(i*50, 400+j*-20, 50, 50);
	}
	ctx.fillStyle = "black";
	ctx.fillText(fruit[i].name,5+i*50,440);
	ctx.fillText(fruit[i].quantity,15+i*50,425)
}

}
document.addEventListener('DOMContentLoaded', displayChart);