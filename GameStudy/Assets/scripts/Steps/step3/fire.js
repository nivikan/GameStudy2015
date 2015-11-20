#pragma strict


var bucketScript : Bucket;

var alunaAnim : Animator;
var bucketAnim : Animator;


function Start () {

	var bucket = GameObject.Find("bucket");
	bucketScript = bucket.GetComponent("Bucket");

}



function Update () {

}



function OnMouseDown () {

		if (bucketScript.isFull == true)
		{
			alunaAnim.Play("");
		}
}