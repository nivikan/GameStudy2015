#pragma strict


//detect collison
//check if aluna has the bucket 
//play an animation of aluna getting water 
//change bucket tag to 'full bucket'


var bucketScript : Bucket;
var alunaAnim : Animator;
var bucketAnim : Animator;


function Start () {

	var bucket = GameObject.Find("bucket");
	bucketScript = bucket.GetComponent("Bucket");
	

}

function Update () {

}



function OnCollisionEnter(collision: Collision)
{
    if(collision.gameObject.name == "Aluna")
    {
    	alunaAnim.Play("alunaGetsWater");
    	bucketAnim.Play("WaterFillUp");
        bucketScript.isFull = true;
    }
}



