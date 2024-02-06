#공간제어 #객체제어
Pung
```C#

void Update()
{

if(Input.GetKeyDown(KeyCode.Space))
	{
		Rigidbody[] rigs = GetComponentsInChildren<Rigidbody>();
		foreach(var item in rigs)
		{
			item.isKinematic = false;
		}
	}

}
```

Pung2 (Cube 터트리기)
Edit - Grid and Snap settings에서 설정후 Ctrl 키를 누른채로 드래그하면 세팅한 단위에 따라 그리드에 snap (불연속적으로 그려진다.)

Palne 하나 
큐브들을 담을 빈 오브젝트 하나(Fragments), 그 자식으로 큐브를 만들어서 넣자.
버전에 따라 다르지만, 만약에 Ligthing이 없다면 Component-Rendering-Ligthing을 통해서 만들자. 
Ctrl + D 키를 통해서 큐브를 복사해서 8개를 만들자. 한군데에 모여있는 그대로 두고 Edit에서 필요한 설정들을 해두자.
그 8개를 하나의 큐브처럼 잘 쌓이도록 하자.

 Grid and Snap에서 Align Selection to Grid를 누르면 선택된 객체를 해당 단위설정에 맞게 움직이게 한다.

Rigidbody와 Tag등을 추가하자. 이 때 8개의 큐브의 태그를 모두 동일하게 하자. Hierachy로 옮겨서 Prefab으로 만들어준다.
새로운 C# Script들을 만들어주자.

```C#
public class Explosion : MonoBehaviour
{
	public float expPower;
	public Vector3 offset;//수정의 용이성을 위해 public

	public void Explosion()
	{
		Rigidbody[] rigidbody = GetComponetsInChildren<Rigidbody>();
		for (int i =0; i <rigidbody.Length; i++)
		{
				rigibody[i].AddExplosionForce(expPower, 
				transform.position + offset, 10f);
		}
	}
}
```

 
```C#
public class Mouse : MonoBehaviour
{
	void Update()
	{
		Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		Raycasthit hit =; // ray는 광선에 대한 정의, hit는 광선이 부딪히는 변수에 대한 정의.
		if(Input.GetMouseButtonDown(0))
		{
		 if(Physics.Raycast(ray, out hit, 100f) && hit.collider.tag == "Box") // Box는 큐브에 설정한  태그
		 {
			 hit.transform.parent.GetComponent<Explosion>().Explosion();
			 
		 }
		}
		
	}

}

```

Mouse는 항상 존재해야  Raycast를 인식하므로, Hierachy에 있는 메인 카메라 등에 적용한다. Fragments의 Explosion(Script)의 값들을 조정해서 실행해보자. 