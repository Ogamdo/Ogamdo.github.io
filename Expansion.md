#공간제어 #객체제어
VR, AR 등에서 오브젝트 등의 확장을 표현함. 

1.원점에서 자식들과의 거리와 방향을 계산
2.그 방향으로 확장한 지점까지 위치와 크기를 계산하여 Lerp

뭉쳐있는 오브젝트들 중 어떤 대상에게 확대와 축소를 할지 정한다.
부모와 자식의 관계로 설정할지, 아니면 특정한 공간좌표 안에 있는 오브젝트들에게 변화를 줄지를 결정하자.

배열의 형태로 구현하기 

```C#
pulbic class Expansion : MonoBehaiour
{
	[SerializeField] // inspector 창에 보이게 함. public과는 다름
	Transform[] child; //각 오브젝트들의 위치정보를 저장.
	Vector3[] nextPos;
	Vector3[] initPos;
	bool flag = false;
	public float scale = 4.0f;
	void Start()
	{
		child = GetComponentsInChildren<Transform>();
		nextPos = new Vector3[child.Length];
		initPos = new Vector3[child.Length];
		for(int i =1; i < child.Length; i++)
		{
			initPos[i] = child[i].position;
			float dist = Vector3.Distance(child[i].position, transform.position);
			Vector3 dir = (child[i].transform.position - transform.position).normalized; //방향만 얻기 위해 normalized를 해준다.
			nextPos[i] = dir *dist * scale;
			
		}
	}
	void Update()
	{
		if(Input.GetMouseButtonDown(0))
		{
			 flag = !flag; //  버튼다운마다 flga 값이 바뀐다.
			
		}
		
		if(flag == true)
		{
			for(int i=1; i<child.Length; i++)
			{
			child[i].position = Vector3.Lerp(child[i].position, initPos[i], 0.01f);
			child[i].localScale = Vector3.Lerp(child[i].localScale, new Vector3(1, 1, 1), 0.05f);
			}
			else if(flag == false)
			{
			for(int i=1; i<child.Length; i++)
			{
			
			}
			
			}
		}
	}
	
	

}
```

ExpansionOver
``` C#
public class ExpansionOver : MonoBehaviour
{
[SerializeField]
List<Transform> child = new List<Transform>();
List<Vector3> nextPos = new List<Vector3>();
List<Vector3> initPos = new List<Vector3>();

[Range(1.0f, 10.0f)]
public float scale = 4.0f;

[Range(1.0f, 30.0f)]
public float range;

bool flag = false;

void Start()
	{
		Collider[] cools = Physics.OverlapSphere(transform.position, range);

		foreach (var item in cools) // item은 원소
		{
			child.Add(item.gmaeObject.transform);
			
		}
		foreach (var item in child)
		{
			initPos.Add(item.transform.position);
			float dist = Vector3.Distance(item.transform.position, transform.position);
			Vector3 dir = (item.transform.position - transform.position).normalized;
			nextPos.Add(dir * dist * scale);
			
		}

	}
private void OnDrawGizmos() //기즈모 모드를 발동시키면 보인다.
{
	Gizmos.color = Color.green;
	Gizmos.DrawWireSphere(transform.position, range);
}

void Update()
	{
		if (Input.GetMouseButtonDown(0))
		{
			flag = !flag;
		}
		if(flag == true)
		{
			int i =0;
			foreach (var item in child)
			{
				item.position =  Vector3.Lerp(item.position, nextPos[i++], 0.01f);
				item.localScale = Vector3.Lerp(item.localScale, new Vector3(scale, scale, scale), 0.01f);
			}
			
		}
		else if (flag ==false)
		{
			int i =0;
			foreach (var item in child)
			{
			item.position =  Vector3.Lerp(item.position, initPos[i++], 0.01f);
			item.localScale = Vector3.Lerp(item.localScale, new Vector3(1, 1, 1), 0.01f);
			}		
		}

	}

}
```