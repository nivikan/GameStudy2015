#pragma strict

function Start () {

}

function Update () {

if(Input.GetKeyDown("r")){

Application.LoadLevel("menu");

}
if(Input.GetKeyDown("a")){

Application.LoadLevel("MainScene_Part1");

}
if(Input.GetKeyDown("b")){

Application.LoadLevel("MainScene_Part2");

}


}

