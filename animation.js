"use strict";

var Scene = {
    canvas : undefined,
    canvasContext : undefined,
	sprite: undefined
};

Scene.start = function () {
	// Get the canvas and it's context.
    	Scene.canvas = document.getElementById("myCanvas");
    	Scene.canvasContext = Scene.canvas.getContext("2d");

	// Seup the eating scene to be displayed.
    	Scene.sprite = eating;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    	Scene.sprite.img.src = Scene.sprite.src;

	// Wait till the eating image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {		
		Scene.sprite.offset=-Scene.sprite.frames[Scene.sprite.frame].frame.w;
    		Scene.mainLoop();
	}
};

// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);

Scene.clearCanvas = function () {
	Scene.canvasContext.fillText("Eating Animation",10,30);
	Scene.canvasContext.fillStyle = "white"
    	Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
    Scene.clearCanvas();
    Scene.update();
    Scene.draw();
	
	// Animate at 6 frames a second.
    window.setTimeout(Scene.mainLoop, 1000 /6);
};

Scene.update = function () {
	Scene.canvas.width = window.innerWidth;
  	Scene.sprite.offset=Scene.canvas.width/4;
};

Scene.draw = function () {
	Scene.canvasContext.drawImage(
		Scene.sprite.img,
		Scene.sprite.frames[Scene.sprite.frame].frame.x,
		Scene.sprite.frames[Scene.sprite.frame].frame.y,
		Scene.sprite.frames[Scene.sprite.frame].frame.w,
		Scene.sprite.frames[Scene.sprite.frame].frame.h,
		250,
		300,
		Scene.sprite.frames[Scene.sprite.frame].frame.w,
		Scene.sprite.frames[Scene.sprite.frame].frame.h
		);
	
	// Advance to the next frame.
	Scene.sprite.frame++;

	// At the end of the sprite sheet, start at the first frame.
	if(Scene.sprite.frame==Scene.sprite.frames.length-2)
		Scene.sprite.frame=0;
};
