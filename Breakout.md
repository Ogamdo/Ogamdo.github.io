#공간제어 #객체제어

<h1>벽돌깨기 게임의 사양</h1>
1. 공을 튕기는 것
2. 목숨의 제한이 있는 것 
3. 모든 벽돌을 깨면 공의 속도가 느려짐
4. Yout won! 이 나옴.
5.  3차원 오브젝트들을 사용했지만, 카메라를 고정했기 때문에 2차원의 느낌을 주는 게임이다.

![[Pasted image 20240129192024.png]]

 Hierachy의 항목들을 Ctrl + D 키를 누른 후 드래그를 하면 복제가 된다.
두 기둥에 각각 3과 -3 정도의 Rotation을 준다. 서로  평행하면 그 사이에서 부딪히는 공이 계속해서 튕긴다.(현실세계가 아니기 때문에 공기에 의한 마이 적용되지 않는듯?)
 우선 오브젝트들을 다 만든 후에 스크립트를 작성하자. 
 공의 Gravity는 제거한다. 등속으로 계속 움직이기 위해서 Rigidbody를 적용 후 Use Gravity를 해제한다.

<h3>Particle System</h3>


![[Pasted image 20240129193844.png]]

빈 오브젝트인 Particle을 넣자.  Duration 0.5를 넣자. 

Bouncy 를 만들자.
Dynamic Friction, Static Friction은 마찰과 관련됐다. 이 스크립트에서는 영구히 튕기는 것을 만들 것이므로 마찰은 0이 되게 하자.
Bounciness는 1이 되게 하자.
wall과 Paddle의 Box Collider의 Material의 None에 Bouncy를 집어넣자. 
ball에도 집어넣자.(Sphere Collider). box에도 집어넣자.

<h6>Scripts</h6>
![[Pasted image 20240129201336.png]]

Singleton : 게임에 단 하나만 존재해야 하는 것으로 대표적으로 GameManager 등이 있다. 그래서 아래와 같이 조건문으로 instance가 존재하면 파괴시킨다.
![[Pasted image 20240130022620.png]]


Ball // hierachy에서  Paddle의 자식으로 넣자.  이후 Paddle과 Bricks는 Prefab으로 만들자.
```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[RequireComponent(typeof(Rigidbody))]//Rigidbody가 없어서 발생하는 오류를 줄여준다. Rigidbody를 넣어야하는데 넣지 않고 작성했으면 채워준다. 

public class Ball : MonoBehaviour
{
	float ballSpeed = 1000; //소프트코딩?
	Ridigbody rb;
	
	void Start()
	{
	rb = GetComponent<Rigidbody>();
		
	}
	void Update()
	{
		if(Input.GetMouseButtonDown(0))
		{
			rb.AddForce(ballSpeed, ballSpeed, 0);
			
		}
		
	}
	
}
```

Paddle : 방향키를 이용해서 Paddle을 양방향으로 움직이자.
```C#
public class Paddle : MonoBehaviour
{
	 void Start()
	 {
	 
	 }

	void Update()
	{
		// float x = Input.GetAxis("Horizontal")*0.2f; 이렇게 쓰면 현재 좌표의 값이 없으므로 잘 움직이지 않는다.
		float x = transform.position.x + Input.GexAxis("Horizontal")*0.2f;

	
		
		transform.position = new Vector3(Mathf.Clamp(x, -5.5f, 5.5f -9.5f, 0f));//실제로는 2차원처럼 움직이기 때문에 z값은 0으로 준다. y 방향으로 움직이 않으므로 y값 또한 seen에서 보이는 값으로 고정한다.
		
	}

}
```

벽돌

```C#
public class :MonoBehaviour

```

![[Pasted image 20240129221307.png]]
![[Pasted image 20240129221410.png]]

```C#
public class TimedDestory : MonoBehaviour
{
	void Start()
	{
		Destory(gameObject, 1.0f);
	}

}
```
public class TimedDestory : MonoBehaviour

![[Pasted image 20240130022127.png]]

text를 Hierachy에서 새로 만들자. Lives, GameOver, YouWon 등으로 만들고 카메라에 보이지 않는 곳에 배치시키자.


<h5>BreakOut 게임을 위한GameManager</h5>
```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
public class GameManager : MonoBehaviour
{
	int lives = 3;
	int bricks = 20;
	float resetDelay = 2f;
	GameObject clonePaddle;
	public Text livesText;
	public GameObject gameOver; //text는 SetActive 등이 안된다.
	public GameObject youWon;
	public GameObject bricksPrefab;
	public GameObject paddle;
	public GameObject deathParticles;
	public static GameManager instance = null;

	void Start()
	{
		if(instance == null)
		{
			instance = this;
		}
		else if(instance != this)
		{
			Destroy(gameObject);
			clonePaddle = Instantiate(paddle, transform.position, Quaternion.identity) as GameObject;
			Instantiate(bricksPrefab, transform.position, Quaternion.identity);
		}
	public void LoseLife()
	{ 
		lives--;
		livesText.text = "Lives: " + livse;
		Instantiate(deathParticles, clonePaddle.transform, Quaternion.identity);
		Destroy(clonePaddle);
		Invoke("SetupPaddle", resetDelay);
		if(lives <1)
		{
			gameOver.SetActive(true);
			Time.timeScale = 0.2f;
			Invoke("Reset", resetDelay);
			
		}
	
	}
	void SetUpPaddle()
	{
		clonePaddle = Instantiate(paddle, transform.position, Quaternion.identity) as GameObject;
		
	}
	private void Reset()
	{
		Time.timeScale = 1f;
		SceneManager.LoadScene("SampleScene"); // 불러올 씬의 이름을 넣자.
		
		
	}
	

}
```

<h5>공이 떨어지면 Lives의 숫자가 줄어들게 하기 </h5>
먼저 공이 떨어지면 목숨이 줄어드는 'DeadZone'을 구현하는 스크립트를 작성하자.

```C#
public class DeadZone : MonoBehaviour
{
	private void OnTriggerEnter(Collider other)
	{
		GameManager.instance.LoseLife();
	}

}
```

<h5> brickParticle;</h5>
```C#
public class Bricks : MonoBehaviour
{
	public GameObject brickParticle;
	private void OncollisionEnter(Collision collision)
	{
		Instantiate(brickParticle, transform.position, Quaternion.identity);
		Destroy(gameObject);
		GameManager.instance.DestroyBrick();
	}

}
```