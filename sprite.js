"use strict";
let count = 0;

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
    	Scene.sprite = number;
	
	// Attach the image to be used for the sprite.
	Scene.sprite.img = new Image();
    	Scene.sprite.img.src = Scene.sprite.src;

	// Wait till the eating image is loaded before starting the animation.
	Scene.sprite.img.onload = function() {
        Scene.draw();	

        let elem = document.getElementById("elem");
        elem.onclick = function() {
            Scene.mainLoop();
        }
	}
};


// Once the basic HTML document is loaded and its parsing has taken place, start the scene.
document.addEventListener( 'DOMContentLoaded', Scene.start);
 
Scene.mainLoop = function() {
    Scene.draw();
	
    if (Scene.sprite.frame<10) {
        window.setTimeout(Scene.mainLoop,500);
    }

    else window.setTimeout(Scene.last,500)
};

Scene.last = function () {
    Scene.canvasContext.drawImage(
		Scene.sprite.img,
		Scene.sprite.frames[1].frame.x,
		Scene.sprite.frames[1].frame.y,
		Scene.sprite.frames[1].frame.w,
		Scene.sprite.frames[1].frame.h,
		10,
		20,
		Scene.sprite.frames[1].frame.w,
		Scene.sprite.frames[1].frame.h
		);

        Scene.canvasContext.drawImage(
            Scene.sprite.img,
            Scene.sprite.frames[0].frame.x,
            Scene.sprite.frames[0].frame.y,
            Scene.sprite.frames[0].frame.w,
            Scene.sprite.frames[0].frame.h,
            120,
            20,
            Scene.sprite.frames[0].frame.w,
            Scene.sprite.frames[0].frame.h
            );
}

Scene.draw = function () {

    if (Scene.sprite.frame < 10) {
	Scene.canvasContext.drawImage(
		Scene.sprite.img,
		Scene.sprite.frames[Scene.sprite.frame].frame.x,
		Scene.sprite.frames[Scene.sprite.frame].frame.y,
		Scene.sprite.frames[Scene.sprite.frame].frame.w,
		Scene.sprite.frames[Scene.sprite.frame].frame.h,
		70,
		20,
		Scene.sprite.frames[Scene.sprite.frame].frame.w,
		Scene.sprite.frames[Scene.sprite.frame].frame.h
		);

	// Advance to the next frame.
	    Scene.sprite.frame++;
    }
    
};
