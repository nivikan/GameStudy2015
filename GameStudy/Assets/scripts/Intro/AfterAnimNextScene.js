#pragma strict

var anim: Animation;
var Image: GameObject;

function Start() {
}


// Plays an animation only if we are not playing it already.
function Update() {
	print(Time.deltaTime >= 0.01660299);
	if(  Time.deltaTime >= 0.01660299){
		//Application.LoadLevel("MainGame");
		}
}