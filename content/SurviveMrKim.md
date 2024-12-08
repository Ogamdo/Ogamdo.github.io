Title:UnityUI
Date: 2024-12-09 00:38
Category: Unity


---
![Unity](https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
<img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" />
## Survive-Mr.Kim 프로젝트

**GitHub Repository:** [https://github.com/Ogamdo/Survive-Mr.Kim/tree/final](https://github.com/Ogamdo/Survive-Mr.Kim/tree/final)  
**기술 스택:** Unity, C#, GitHub, BoxCollider, UI Toolkit

---

## 역할 및 기여 요약

### 프로젝트 개요
**"Survive-Mr.Kim"** 프로젝트에서, 저는 UI 관리 및 게임 시스템 최적화라는 두 가지 주요 영역에서 기여했습니다. 초기 설계부터 유지보수, 최적화까지 포함된 작업들은 프로젝트의 기술적 기반을 강화하고 사용자 경험을 향상시키는 데 크게 기여했습니다.

GitHub를 활용하여 저장소를 생성하고, 이슈를 등록해 작업을 체계적으로 관리하려는 시도를 했습니다. 또한, 원래 폴더 구조가 없던 프로젝트에 체계적인 폴더 구조를 직접 설계하고 구성하여 관리의 편리성을 높였습니다.

---

### 주요 역할

#### 1. **UI 설계 및 구현**

저는 UI 시스템의 구조를 설계하고, 점진적인 개선을 통해 효율적이고 확장 가능한 UI 시스템을 구현했습니다.

- **`TitleUIManager.cs`**: 게임의 초기 화면(타이틀 UI)을 관리하며, 게임 매뉴얼과 크레딧 표시, 씬 전환 등의 기능을 구현.
- **`PlayUIManager.cs`**: `TitleUIManager`를 상속하여 인게임 UI 기능을 확장. 일시정지, 재개, 재시작, 종료 및 타이머 관리 기능을 포함하여 플레이어 경험을 풍부하게 개선.
- **`SimplePlayUI.cs`**: 기획 변경과 유지보수를 반영해 UI를 간소화. 체크박스를 활용한 게임 조건 표시 및 간단한 인터페이스 제공.

> UI 구현 과정에서 **코드 재사용성을 극대화**하고, 상속 구조를 활용하여 관리와 확장성을 동시에 달성.

---

#### 2. **게임 시스템 리팩터링 및 최적화**

초기 작성된 **`GameManager`**와 **`FireSpawn`** 코드를 리팩터링하여, 코드의 간결성과 시스템 최적화를 달성했습니다.

- **`GameManager.cs` 리팩터링**:
  - 초기 버전의 불필요한 반복 코드를 제거하고, **싱글톤 패턴**을 적용해 관리 용이성을 확보.
  - UI 참조를 추가하여 `PlayUIManager`와 `SimplePlayUI`가 게임 상태를 동기화하도록 구현.
  - 빌런 스폰 시스템을 정교화하여 게임 난이도 조정을 효율적으로 처리.

- **`FireSpawn.cs` 리팩터링**:
  - 복잡한 로직을 간소화하고, **BoxCollider**를 통한 랜덤 위치 계산을 정확하게 수정.
  - 불꽃 생성 루프를 개선하여 성능 저하를 방지하고 코드 가독성을 높임.
  - 게임 타이머와의 연동을 최적화하여 UI에서 더 쉽게 참조할 수 있도록 설계.

> 이 과정에서 **UI와 시스템 간의 연결성 강화** 및 **게임플레이 최적화**를 통해 더 나은 사용자 경험을 제공.

---

### 프로젝트에서의 기여 요약

- **UI 시스템 설계 및 구현**:
  - 상속 구조를 활용해 확장성과 재사용성을 높임.
  - 플레이어 친화적인 간단한 UI를 기획 변경에 맞게 설계.
- **게임 시스템 최적화**:
  - 초기 코드 리팩터링으로 성능과 유지보수성을 향상.
  - UI와 게임 시스템의 연결성을 강화하여 협업 효율성을 증대.
- **프로젝트 관리**:
  - GitHub를 활용하여 이슈를 등록하고 작업 현황을 체계적으로 관리.
  - 폴더 구조를 설계하고 일관성 있게 관리하여 프로젝트의 유지보수성을 향상.

---

### 결론

저는 "Survive-Mr.Kim" 프로젝트에서 UI와 게임 시스템 두 가지 분야에서 중요한 기술적 기여를 했습니다. 초기 코드의 복잡성을 줄이고 유지보수성을 높이는 동시에, 사용자 경험을 풍부하게 만드는 데 중점을 두었습니다. 또한 GitHub와 폴더 구조 설계를 통해 프로젝트 관리의 체계성을 확보하며 프로젝트의 성공에 기여했습니다.

---

## Survive-Mr.Kim Project

**GitHub Repository:** [https://github.com/Ogamdo/Survive-Mr.Kim/tree/final](https://github.com/Ogamdo/Survive-Mr.Kim/tree/final)  
**Tech Stack:** Unity, C#, GitHub, BoxCollider, UI Toolkit

---

### Role and Contributions Summary

#### Project Overview
In the **"Survive-Mr.Kim"** project, I contributed significantly in two major areas: UI management and game system optimization. From initial design to maintenance and optimization, my work strengthened the project's technical foundation and enhanced the user experience.

I utilized GitHub to create the repository and systematically manage tasks by registering issues. Additionally, I designed and organized a structured folder hierarchy, improving the maintainability of the project, which initially lacked any folder structure.

---

#### Key Roles

##### 1. **UI Design and Implementation**

I designed the UI system's structure and implemented scalable and efficient UI features through progressive improvements.

- **`TitleUIManager.cs`**: Managed the title UI, including game manual and credits display, as well as scene transitions.
- **`PlayUIManager.cs`**: Extended `TitleUIManager` to incorporate in-game UI functionality such as pause, resume, restart, quit, and timer management, enhancing the player experience.
- **`SimplePlayUI.cs`**: Simplified the UI based on changes in project requirements and maintenance needs. Used checkboxes to represent game conditions and created a user-friendly interface.

> The UI implementation maximized **code reusability** and leveraged an inheritance structure for efficient management and scalability.

---

##### 2. **Game System Refactoring and Optimization**

I refactored the initial versions of **`GameManager`** and **`FireSpawn`**, achieving code simplicity and system optimization.

- **`GameManager.cs` Refactoring**:
  - Eliminated redundant code in the initial version and applied the **singleton pattern** for ease of management.
  - Integrated UI references to synchronize game states with `PlayUIManager` and `SimplePlayUI`.
  - Enhanced the villain spawning system to efficiently adjust game difficulty.

- **`FireSpawn.cs` Refactoring**:
  - Simplified complex logic and corrected random position calculations using **BoxCollider**.
  - Improved the fire spawning loop to prevent performance issues and increase code readability.
  - Optimized integration with the game timer for easier UI referencing.

> These improvements enhanced **connectivity between UI and system** while optimizing gameplay for a better user experience.

---

#### Contribution Summary

- **UI System Design and Implementation**:
  - Enhanced scalability and reusability using an inheritance structure.
  - Designed player-friendly, simplified UI aligned with project requirements.
- **Game System Optimization**:
  - Improved performance and maintainability through initial code refactoring.
  - Strengthened the integration between UI and game systems for efficient collaboration.
- **Project Management**:
  - Managed tasks systematically using GitHub by registering issues and monitoring progress.
  - Designed and maintained a structured folder hierarchy to improve the project's maintainability.

---

#### Conclusion

In the "Survive-Mr.Kim" project, I made significant technical contributions in both UI and game systems. My work reduced code complexity, enhanced maintainability, and enriched the user experience. Additionally, I ensured structured project management through GitHub and folder hierarchy design, contributing to the project's overall success.



---
