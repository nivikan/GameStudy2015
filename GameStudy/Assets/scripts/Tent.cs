using UnityEngine;
using System.Collections;

public class Tent2 : MonoBehaviour {

	public Animator anim;
	public GameObject tent;
	

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		//Debug.Log (anim.GetBool(isOpen), gameObject);
	
	}

	void OnMouseDown() {
		if (gameObject.tag == "closed") {
			anim.SetBool("isOpen", true);
			gameObject.tag = "open";
			
		} 

		else {
			anim.SetBool("isOpen", false);
			gameObject.tag = "closed";
		}

	}

	void OnMouseEnter() {
		print ("MOUSE OVER ME");
	}

	void OnMouseOver() {
		print ("MOUSE OVER ME");
	}
}
