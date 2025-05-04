# FANDOM-K

## 1. 프로젝트 소개

FANDOM-K는 K-POP 팬들을 위한 종합 팬덤 플랫폼입니다. 우리 플랫폼을 통해 사용자들은 다음과 같은 활동을 할 수 있습니다:

- 좋아하는 K-POP 아이돌을 위한 이벤트 생성 및 참여
- 아이돌에게 크레딧을 후원하여 직접적인 지원 제공
- 다양한 투표 이벤트에 참여하여 팬덤 활동 증진
- 마이페이지에서 좋아하는 아이돌 추가 및 관리
- 팬덤 커뮤니티와 소통하며 정보 공유

FANDOM-K는 팬과 아이돌 사이의 거리를 좁히고, 팬들이 더욱 적극적으로 아이돌을 지원할 수 있는 플랫폼을 목표로 합니다.

## 2. 배포 주소

- [배포 주소](https://fandom-k-three.vercel.app/)

## 3. 주요 기능

### 랜딩 페이지

<p align="center">
  <img src="public/gifs/gif_land-page-PC.gif" width="70%" >
  <img src="public/gifs/gif_land-page-mobile.gif" width="16.7%">
</p>

- K-POP 팬덤 문화에서 차용한 요소(입장띠, 포토카드, 스마트폰 등)를 시각적으로 녹여냈습니다.
- `모션 애니메이션`과 `스크롤 스냅`을 활용하여 몰입감 있는 UX를 제공합니다.
- `IntersectionObserver` API를 활용해 화면에 요소가 나타날 때만 애니메이션을 활성화하여 성능 최적화를 적용했습니다.

### 메인 페이지

<img src="public\gifs\gif_main-page.gif"/>

캐러셀

- `useRef`를 활용하여 캐러셀 전체 넓이에 대해서 표시할 카드의 넓이를 구하여 카드를 렌더링해줬습니다.
- `반응형 디자인`으로 화면 크기 움직임을 resize이벤트 리스너로 확인하고 이에 따라 카드 넓이와 카드를 랜더링 해주는 개수를 조절하여 반응형으로 캐러셀이 동작하도록 만들었습니다.
- 애니메이션 중복 사용을 방지하기 위한 로직을 추가하여 캐러셀이 동작이 완료된 이후에 애니메이션이 동작하도록 구현하였습니다.

이달의 차트

- `react-router-dom`의 Outlet 컴포넌트를 사용하여 선택한 탭에 따라 다른 컴포넌트를 렌더링하도록 구현하였습니다.
- 디바이스 크기에 따라 페이지네이션 개수를 자동 조절 (PC: 10개, 모바일: 5개), 커서 기반 데이터 로딩 방식으로 데이터 페이징을 적용했습니다.
- 성능 측면에서는 `useCallback`을 사용해 불필요한 리렌더링 방지하고 효율적인 렌더링을 유도했습니다.

### 충전 모달

<img src="public\gifs\gif_credit-modal.gif"/>

- 모달 컴포넌트는 `React Portal`을 활용하여 구현했습니다. .React Portal을 사용함으로써 모달이 DOM 계층 구조와 관계없이 document.body에 직접 렌더링되어 z-index 문제를 방지할 수 있었습니다.
- `motion` 라이브러리를 활용하여 모달이 열고 닫힐 때 부드러운 애니메이션 효과를 넣어 사용자 경험을 향상시켰습니다.

### 투표 모달

<img src="public\gifs\gif_vote-modal.gif"/>

- `ChartContext`를 활용해 상태 통합 관리하며, 순위를 자동 부여하는 로직을 구현했습니다.

### 상세 페이지

<img src="public\gifs\gif_detail-page.gif"/>

- `적응형 디자인`으로, PC와 Tablet, Mobile에서 다른 레이아웃을 확인하실 수 있습니다.
- progress bar가 포함된 후원 정보 컴포넌트는, `합성 컴포넌트 패턴`으로 구현하여 렌더링 최적화와 컴포넌트의 재사용성을 높였습니다.
- `web worker`로 타이머를 구현하여 메인 스레드의 부담을 줄였습니다.
- `memo`를 통해 불필요한 렌더링을 최소화했습니다.
- `lazy loading`과 `Suspense`를 추가해 성능 최적화 했습니다.
- PC와 Mobile은 원 스크롤 페이지로 구현되어 있고, `애니메이션`은 motion과 tailwindCSS를 활용했습니다.

### 후원 모달

<img src="public\gifs\gif_donate-modal.gif"/>

- 상세 페이지에서 사용되는 후원 모달은 Modal 컴포넌트, CreditForm 컴포넌트, IdolCardList 컴포넌트를 조합하여 구현하였습니다.

### 마이 페이지

<img src="public\gifs\gif_my-page.gif"/>

- `motion`라이브러리를 사용하여 각 동작마다의 시각적인 상호작용을 증대시켰습니다.
- `Intersectoin Observer` API를 통한 무한스크롤을 구현하여 데이터를 불러오도록하였습니다.
- `useCallback`,`memo`를 사용하여 렌더링성능을 최적화하였습니다.

### 404 페이지

<img src="public\gifs\gif_404.gif">

## 4. 폴더 구조

<img src="src\assets\images\img_folder-structure.png">

## 5. 개발 스택

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white&style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white&style=flat-square)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white&style=flat-square)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white&style=flat-square)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&style=flat-square)

![Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white&style=flat-square)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white&style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white&style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black&style=flat-square)

## 6. 팀원 소개 및 역할

| 이름 / 직책                                         | 사진                                                                                                                                                                                                                                                                                                           | 주요 역할                                                                      |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **[명지우 (팀장)](https://github.com/MyungJiwoo)**  | <img width="120" src="https://media.discordapp.net/attachments/1351822822653038634/1366969375617318954/image.png?ex=6812e0f0&is=68118f70&hm=8af4985b8b793869bb494312698f03fb2d3760641e3302c5094f21aee104f2f6&=&format=webp&quality=lossless&width=389&height=416" alt="명지우 사진">                           | 프로젝트 총괄<br>공통 컴포넌트: 차트 순위, 관심있는 아이돌<br>후원 상세 페이지 |
| **[맹은빈 (팀원)](https://github.com/evaain706)**   | <img width="120" src="https://fine-saguaro-049.notion.site/image/attachment%3A1c690960-2df9-4836-8eaa-469eaf0d8c75%3Ae47ed6b9-d066-4f07-9c6f-cdb929edafab.png?table=block&id=1d5f9996-4a81-80d6-a153-d5a58c7f4a9b&spaceId=f9c79b7d-edcb-448f-86d6-3e0c4cade001&width=2000&userId=&cache=v2" alt="맹은빈 사진"> | 공통 컴포넌트: 버튼, Input<br>마이 페이지                                      |
| **[문혜란 (팀원)](https://github.com/gpfksdlrn)**   | <img width="120" src="https://fine-saguaro-049.notion.site/image/attachment%3A322a2de0-5f2e-4148-b156-560b8838ff64%3Aa19d9a78-0ed1-4dc2-85b0-3c32b2e22f33.png?table=block&id=1d5f9996-4a81-8006-8a44-d5740a7d8578&spaceId=f9c79b7d-edcb-448f-86d6-3e0c4cade001&width=2000&userId=&cache=v2" alt="문혜란 사진"> | 공통 컴포넌트<br>메인 페이지: 차트, 투표                                       |
| **[박재현 (팀원)](https://github.com/justhighway)** | <img width="120" src="https://media.discordapp.net/attachments/1351822822653038634/1366987784752992316/image.png?ex=6812f215&is=6811a095&hm=7f9e96962a36a8f22703b66b5f89f55456312de83d899e42ed966ae527559b41&=&format=webp&quality=lossless&width=578&height=805" alt="박재현 사진">                           | 프로젝트 환경 설정<br>디자인 및 랜딩 페이지<br>토스트 메시지                   |
| **[유용민 (팀원)](https://github.com/Yongmin0423)** | <img width="120" src="https://fine-saguaro-049.notion.site/image/attachment%3A606dbed9-a44a-429f-8974-83562ea4d684%3Aa0862465-f4b6-4f2f-bdd8-1ffab2a0d27a.png?table=block&id=1d5f9996-4a81-80b0-a2ff-da09e2edcdda&spaceId=f9c79b7d-edcb-448f-86d6-3e0c4cade001&width=2000&userId=&cache=v2" alt="유용민 사진"> | 공통 컴포넌트: Navbar, 모달창 등<br>메인 페이지: 캐러셀<br>배포                |

## 7. 개발 프로세스

### ✅ 개발 흐름

1. **기본 요구사항 완성** (1~2차 스프린트)

   - 컴포넌트 스타일 개발 (컴포넌트 단위 분담)
   - 기능 개발 (기능 단위 분담)

2. **리팩토링** (3~4차 스프린트)
   - 페이지 단위 또는 기능 단위로 리팩토링

---

### ✅ 기본 요구사항 완성

1. **컴포넌트 스타일 개발**

   - 기본 링크 연결, `onChange`, 유효성 검사 포함

2. **기능 단위 개발**

   - API 연결 등 실제 기능 구현

3. **페이지 단위 완성**
   - 기능이 포함된 컴포넌트를 레이아웃에 맞게 배치

---

### ✅ 리팩토링

1. 모든 개발 완료 후 리팩토링 시작
2. 기본 요구사항 외의 **추가 기능** 중점 개발 (예: 애니메이션)
3. **선점제 방식**으로 리팩토링 진행 (R&R 사전 분담 없음)

## 8. Git 전략 및 컨벤션

### 브랜치 전략

- **Fork 없이 작업**: Organization → 원본 clone
- 브랜치 구조:
  | 브랜치 | 설명 |
  |--------|------|
  | `main` | 실제 서비스 배포용 브랜치 |
  | `develop` | dev 서버에서 사용하는 통합 브랜치 |
  | `feature/번호` | 기능 단위 작업 브랜치 (작업 완료 후 삭제) <br>예: `feature/30` |

---

### 💬 커밋 컨벤션 (Udacity 스타일)

| 태그       | 설명                                                |
| ---------- | --------------------------------------------------- |
| `feat`     | 새로운 기능 추가                                    |
| `fix`      | 버그 수정                                           |
| `docs`     | 문서 수정                                           |
| `style`    | 코드 포맷팅, 세미콜론 누락 등 (코드 로직 변화 없음) |
| `refactor` | 코드 리팩토링                                       |
| `test`     | 테스트 코드 추가 및 수정                            |
| `chore`    | 빌드, 패키지 매니저 등 설정 변경                    |

---

### 🧩 네이밍 컨벤션

- 조건식이 복잡하거나 재사용한다면 **이름을 부여**
- **매직 넘버는 상수화하여 사용**
- **절대 경로 alias 사용 권장**

| 항목               | 네이밍 규칙                                                           |
| ------------------ | --------------------------------------------------------------------- |
| 디렉토리명         | `kebab-case`                                                          |
| 컴포넌트, 페이지명 | `PascalCase` (파일명 = 컴포넌트명)                                    |
| 함수, 변수, 훅     | `camelCase`                                                           |
| asset 파일명       | 소문자 사용<br>아이콘: `icon_`, 이미지: `image_`                      |
| 이벤트 핸들러 prop | `on__`                                                                |
| 이벤트 함수명      | `handle__`                                                            |
| 커스텀 훅          | `use__`                                                               |
| boolean 타입 변수  | `is__`, `has__`                                                       |
| Context            | `__Context`                                                           |
| 고차 컴포넌트(HOC) | `with__`                                                              |
| state setter 함수  | `set__`                                                               |
| 배열 변수          | `__List`                                                              |
| 컴포넌트 선언 방식 | **화살표 함수** 사용                                                  |
| UI 컴포넌트        | 단수형 이름 (예: `Button`, `Card`)                                    |
| Entity 컴포넌트    | Entity명 + 역할 (예: `UserProfile`, `ProductCard`)                    |
| import 순서        | 1) 외부 라이브러리 (default → custom)<br>2) 절대 경로<br>3) 상대 경로 |
