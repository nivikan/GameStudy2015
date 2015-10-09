using System.Collections;
using UnityEngine;

class Bucket : MonoBehaviour
{
	private bool dragging = false;
	private float distance;
	
	
	void OnMouseEnter()
	{
	
	}
	
	void OnMouseExit()
	{

	}
	
	void OnMouseDown()
	{
		distance = Vector3.Distance(transform.position, Camera.main.transform.position);
		dragging = true;
		gameObject.layer = 2;
	}
	
	void OnMouseUp()
	{
		dragging = false;
	}
	
	void Update()
	{
		if (dragging)
		{
			Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			Vector3 rayPoint = ray.GetPoint(distance);
			transform.position = rayPoint;
		}
	}
}