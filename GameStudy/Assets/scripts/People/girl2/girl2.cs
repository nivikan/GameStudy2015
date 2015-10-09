using UnityEngine;
using System.Collections;

public class girl2 : MonoBehaviour {

	public GameObject tent;
	public Animator anim;
	
	// Use this for initialization
	void Start () {
		
		tent = GameObject.Find ("tentOP");
		
	}
	
	// Update is called once per frame
	void Update () {
		
		if (tent.tag == "open")
			tentToCamp();
		
		
	}
	
	void tentToCamp()
	{
		anim.SetInteger("whichScreen", 2);
	}
	

}
