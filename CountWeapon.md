#공간제어 #객체제어
Count
```C#
public class Count : MonoBehaviour
{
	public GameObejt bomb;
	float _time = 5;
	bool paused = false;
	void Start()
	{
		StartCoroutine(FiveToZero()); //IEnumerator로 만들어줘야 메소드를 사용가능하다.
	}

	IEnumerator FiveToZero()
	{
		Debug.Log(_time); //Debug는 콘솔창 호출
		while(_time >0f)
		{
			yield return new WaitForSeconds(1f);
			--_time;
			Debug.Log(_time);
			Flip();
			if(_time == 0)
			{
				bomb.AddComponent<Rigidbody>().AddExplosionForce(1000, transform.position, 10);
			}
		}
	}
	private void Flip()
	{
		Vector3 theScale = transform.localScale;
		theScale.x *= -1; // 반대방향으로 회전시키는 코드
		transform.localScale = theScale;
		
	}
	void Update()
	{
		if(Input.GetKeyDown(KeyCode.P))
		{
			paused = ! paused;
			
		}
		if(paused)
			Time.timeScale = 0;
		else
			Time.timeScale = 1;
	}
}

```

Weapon
```C#
public class Weapon : MonoBehaviour
{
	int index = 0; 
	
	void Start()
	{
		SelectWeapon(index);
	}
	private void SelectWeapon(int index)
	{
		for (int i =0; i<transform.childCount - 3; i++) //무기가 아닌 오브젝트가 3개 있으므로 3을 빼준다.
		{
			if ( i == index) // 원하는 무기는 사용하고, 그렇지 않은 것은 사용하지 않게 함.
			{
				transform.GetChild(i).gameObject.SetActive(true);
				index = i;
				
			}
			else
			{
				transform.GetChild(i).gameObject.SetActive(false);
			}
		}
	
	}
	void Update()
	{
		if(Input.GetKeyDown("1"))
		{
			SelectWeapon(0); //첫번째 무기를 호출해야하므로 0
			
		}
		else if(Input.GetKeyDown("2"))
		{
			SelectWeapon(1);
		}
		else if (Input.GetKeyDown("3"))
		{
			SelectWeapon(2);
		}
	}

}
```