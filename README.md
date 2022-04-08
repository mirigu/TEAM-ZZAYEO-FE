# ✈️'짜여' 서비스 설명 보러가기

> [메인 ReadMe.md](https://github.com/zzayeo)를 참고 해주세요!

> '짜여' 사이트가 궁금하시다면 아래 바로가기를 참고 해주세요!

<center>
  
[![바로가기 버튼](https://firebasestorage.googleapis.com/v0/b/megazine-11a01.appspot.com/o/images%2Fimg-bg%20(5).png?alt=media&token=647fca42-c2b2-479b-afe5-7b2af5ea32f7)](https://zzayeo.com/)

</center>

<br/>

# 🙋팀원 소개

|  이름  |                           깃허브 주소                            |       포지션       |
| :----: | :--------------------------------------------------------------: | :----------------: |
| 유호빈   | [https://github.com/hobinyoo](https://github.com/hobinyoo)        | 프론트엔드  |
| 송원석   | [https://github.com/sws1552](https://github.com/sws1552)          | 프론트엔드  |
| 구미리   | [https://github.com/mirigu](https://github.com/mirigu)            | 프론트엔드  |

<br>

# :book: 라이브러리

|       name        |          Appliance          | version |
| :---------------: | :-------------------------: | :-----: |
| socket.io-client  |      웹소켓 라이브러리         |  4.4.1  |
|       redux       |          상태 관리           |  4.1.2  |
|    redux-thunk    |       리덕스 미들웨어         |  2.4.1  |
|   redux-actions   |          액션 관리           |  2.6.5  |
|       immer       |         불변성 유지           | 9.0.12 |
|       axios       | HTTP 클라이언트 라이브러리      | 0.26.0 |
|      swiper       |      슬라이더 플러그인        |  8.0.7  |
|  react-date-range |      date 라이브러리         |  1.4.0  |
|    react-helmet   |      html head의 meta, title tag 핸들링을 위해 사용        |  1.4.0  |
| styled-components |    CSS-in-JS 라이브러리      |  5.3.3  |
| google-map-react  |  react google map 라이브러리 |  2.1.10 |

<br>


# ☄️트러블슈팅
<details>
  <summary> <h3>Google Map Api (PolyLine)</h3></summary>
<div markdown="1">
  
### 도입 이유

지도에 마커를 표시하고 각 마커의 PolyLine을 그어주어 사용자가 좀 더 여행루트를 쉽게 볼 수 있게 하기 위함

### 문제 상황

날짜에 해당하는 Marker는 렌더링이 되는 반면 PolyLine 생성 시 PolyLine은 렌더링 되지 않고 그대로 남아 있는 이슈 발생
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/413d074a-c85c-42c4-87cc-e8837419e99f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T134311Z&X-Amz-Expires=86400&X-Amz-Signature=5969947833105d0cf72f2e6b38a8393b756af2a913cfb6fac3359c4c2fd1bf1e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### 문제해결을 위한 시도

1. Map에 그려지는 PolyLine이 바뀔 때마다 useEffect로 재 렌더링 
2. 날짜에 해당하는 Day 개수 만큼 PolyLine 객체를 생성하여 Day의 id와 PolyLine 객체의 Num 번째가 일치할 때만  PolyLine 렌더링

— 두가지 방법 모두 위치 정보는 바뀌었으나 PolyLine은 그대로 남아있었음

### 해결방안

1. DB 안에 위치 정보에 대한 렌더링과 함께 지도를 초기화 시켜주어야 한다는 점을 알게됨
2. Day에 대한 정보가 바뀔 때 이전 구글맵의 컴포넌트를 setmap(null)로 초기화 시켜줌
  
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/58b75dea-5e4d-4464-9c14-dd4c24a80f1b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T134452Z&X-Amz-Expires=86400&X-Amz-Signature=4c072ee2426301100fb499f550abed6aec564414a7aa945fc71ed4426e5ded83&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
</div>
</details>

<details>
<summary><h3>Google Map Api (Fitbound)</h3></summary>
<div markdown="1">
  
### 도입 이유

지도의 위치가 변경될 때마다 지도에 그려치는 Marker와 PolyLine을 구심점으로 자동으로 가운데로 위치 시켜주어 사용자가 지도를 편하게 볼 수 있게함

### 문제 상황

위도와 경도의 위치에 대한 Bounds를 알 수 없다는 에러가 생김
  
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8a8e6bdf-34ee-4782-a58c-204faa813120/%EA%B7%B8%EB%A6%BC4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T134922Z&X-Amz-Expires=86400&X-Amz-Signature=b8f6ef3d2736e35ddb7bab6b064ba214b456783f359b187a9728b388fa86461b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC4.png%22&x-id=GetObject)
  
### 문제해결을 위한 시도

1. 검색했을 때 활용했던 fitbound의 방식을 응용하여 접근
2. 검색했을 때는 하나의 위도, 경도의 정보만을 가져왔지만 여러개의 위도 경도 정보가 쌓이게 될 경우 해결 방법이 필요함
3. Google map react 패키지 안에 bounds를 정의하고 extend를 활용하여 위도 경도의 위치를 확장시켜줄 수 있다는 문서를 발견하여 적용
  
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5aaa4f74-f501-4dd4-95dd-a55a4db7bd86/%EA%B7%B8%EB%A6%BC5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T134729Z&X-Amz-Expires=86400&X-Amz-Signature=6ff577b2794cf8b6dd06bdfc0e5ff870cc762178012a4c3bc0bb252e1cad18e1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC5.png%22&x-id=GetObject)

### 해결방안

Goole map react 컴포넌트 안에 fitbound.js 파일을 만들어주었고 Google map이 새롭게 렌더링 될 때만 fitbound가 적용될 수 있도록 조건을 적용
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ef3640a9-082a-4af6-9684-ee53f8ddd4bd/ezgif.com-gif-maker_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T134959Z&X-Amz-Expires=86400&X-Amz-Signature=1b71198ccab03b589d6fe3b5fdc632e9248ce5ac9cbef22cd3c2fc806182b38a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ezgif.com-gif-maker%2520%281%29.gif%22&x-id=GetObject)
</div>
</details>

<details>
<summary><h3>web socket</h3></summary>
<div markdown="1">

  ### 도입 이유

  좋아요, 댓글, 답글, 채팅 등의 실시간 알림기능을 만들기 위함
  
  ### 문제 상황

  알림기능을 만들기 전에는 socket을 js파일로 따로 만들어 놓은 후 socket이 사용되는 컴포넌트에 import를 해서 사용하는 방식이엿는데 import를 하는 컴포넌트마다 새로운 소켓을 생성한다는 문제가 생김.
  
  ### 해결 방안

  웹이 렌더링이 된 직후 socket을 리덕스 스토어에 저장한뒤 필요한 컴포넌트에서 스토어에 있는 socket을 가져다 쓰는 방식으로 수정
  
 ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e5a1c548-dc50-4331-982c-29ebdf7538cd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T133807Z&X-Amz-Expires=86400&X-Amz-Signature=636b1bf3dc98492ecdbc229c8895879dd9e067a477c2fa7c192ca711ae73efec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
  
  ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/565a788b-c708-44a7-9f6b-4a204a589544/%EA%B7%B8%EB%A6%BC3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T133909Z&X-Amz-Expires=86400&X-Amz-Signature=7fb23d3765b798a2266ac81b748ef8d7a55d32185e555180d0b7b1e448c022b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC3.png%22&x-id=GetObject)
  
</div>
</details>

<details>
<summary><h3>무한스크롤 적용</h3></summary>
<div markdown="1">
  
### 도입 이유

1. 서버에서 전체 데이터를 받아올 경우 클라이언트 과부하를 막기 위함
2. 페이지네이션과 무한스크롤 중 모바일 사용 환경에 더 적합하다고 판단하여 선택

### ❓문제 상황 1

받아오는 데이터가 없을 경우에도 로딩이 계속되며 무한루프 발생

### 문제해결을 위한 시도

1. 로딩이 바뀔 때마다 실행되는 useeffect에 조건을 줌
2. pagenumber가 바뀔 때마다 실행되는 useeffect에 조건을 줌

### 해결 방안

2. pagenumber가 바뀔 때 마다 실행되는 useeffect에 조건을 줌.
- 로딩이 바뀔 때마다 실행되는 useeffect에 isIntersecting(노출 여부)가 true일 때, pagenumber가 endpage와 동일하면 null을 return하도록 했지만, endpage를 인식하지 못하고 계속 무한루프에 빠짐
  
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b4a435a8-81fd-44d6-8295-183c9ad220a6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T133451Z&X-Amz-Expires=86400&X-Amz-Signature=716653b58d2f1d5d21cb5ff32e1f7db797121654976bed585dec45d317778259&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44c19772-dd3d-4abb-824c-136122971ab5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T133556Z&X-Amz-Expires=86400&X-Amz-Signature=ce20231761517894174b25f0557be65a5d0771f18cdafba1265c383448303178&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
  
- pagenumber바뀔 때 실행되는 useeffect에 "endPage !== 0 && pageNumber > endPage"와 같은 조건일 경우 null을 return하도록 하니 endpage에 달했을 때 페이지 로딩이 멈춤
  
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/291fe4ba-6597-45b9-b5dd-7ae1be6ae18a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T133815Z&X-Amz-Expires=86400&X-Amz-Signature=203fca0d60ca3c1e5266d9113d830880babc449631ab21dfa61643b73d78b46d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b8b440ef-b089-4b98-b626-ad9230e2e834/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T134001Z&X-Amz-Expires=86400&X-Amz-Signature=e66c7d5c8d9261587eb9d22b9719f93c7c0296b17b2311f661079d95e8cd1418&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
  
<br/>
  
### ❓문제 상황 2

전체 데이터 또는 카테고리 선택시 데이터를 받아올때 prevstate를 이용해 이전 state값 뒤에 데이터를 추가해주는데,
전체 여행에서 카테고리를 선택하는 경우, 전체 데이터 뒤에 선택한 카테고리 데이터가 추가됨

### 문제해결을 위한 시도

1. 카테고리 모달을 닫을때, state 값을 빈배열로 설정
2. 카테고리 모달을 닫을때, state 값을 빈배열로 설정하고, pageNumber도 1로 설정
  
### 해결 방안

- 먼저 데이터를 추가하는 Feed(state)만 빈배열로 설정하니, 렌더링 되었을때 pageNumber가 1씩 증가해 첫페이지가 아닌 다음페이지를 불러와서 실패함
- 다음으로, 모달을 닫을때, Feed(state) 값을 빈배열로 설정해주고, pageNumber 값을 1로 설정하니 문제를 해결함
  
<br/>
  
### ✨ 추가로 개선해야 할 사항

해당 기능은 API와 컴포넌트가 얽혀있어 다른 컴포넌트에서 활용하기가 힘듬, 추후에 기능 작성 시에는 기능을 분리해서 독립적으로 활용 가능하도록 개선해야겠다는 생각을 함
  
</div>
</details>


<br>

 # 📑서비스 아키텍처

![짜여아키텍처](https://firebasestorage.googleapis.com/v0/b/megazine-11a01.appspot.com/o/images%2FFrame%202%20(1).png?alt=media&token=3facad8a-6c7d-4a98-b51c-93a8cc17a553)

<br>

# 👀피드백 및 개선점

### [피드백1] 이용하다가 일정 수정을 클릭하니 모든 날짜가 선택된 것처럼(보라색으로) 나오고 그대로 등록완료 누르면 invalid date로 나옴

문제점: 데이터를 받아올 때 날짜 데이터 형식이 맞지 않음

피드백 개선: DB에서 Day 리스트를 받아 왔을 때 날짜 데이터를 moment 라이브러리를 사용하여 날짜를 새롭게 정립시켜주고 DatePicker 라이브러리가 적용할 수 있는 데이터 형식으로 수정하였음

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8a272f5f-16c0-4623-950c-388d221a966d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T135844Z&X-Amz-Expires=86400&X-Amz-Signature=d40847446434715a5079af0c4147a1658620788387c5617e213b3167798d55c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

[수정 전, 후]

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2b8c6995-e561-430e-b1a5-6b30f9b02526/%E3%85%87%E3%85%87.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T135948Z&X-Amz-Expires=86400&X-Amz-Signature=5268c8bb7d2fd3b67f2d900286a66c73cf03dbc04a7db0eb335db2dc1dc5207a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E3%2585%2587%25E3%2585%2587.png%22&x-id=GetObject)
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e4754b65-6f35-44e5-ba47-14042a5cacb9/%EA%B7%B8%EB%A6%BC1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T140102Z&X-Amz-Expires=86400&X-Amz-Signature=7f4ea9314d9671e56d24cd954406c790b151b86dc321fba616d472cf8488f745&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC1.png%22&x-id=GetObject)

### [피드백2] 모바일에서 스크롤 내리면 네비바가 올라옵니다.

문제점: 전체 높이를 100vh주었을 때 모바일에서 웹을 실행하게 될 경우 모바일 브라우저 네비게이션바 위로 웹이 실행

피드백 개선: 전체 높이를 100%로 수정하고 position: fixed, overflow: hidden을 주어 모바일 화면에서도 전체 웹을 볼 수 있도록 수정

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da4b38d6-c8bc-4254-ae78-f43eb6eb4bef/%EA%B7%B8%EB%A6%BC2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T140229Z&X-Amz-Expires=86400&X-Amz-Signature=f10234ee1f598699b650c9d5a9be7f17e7c4514f7e38c16047af54a9d92b609c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC2.png%22&x-id=GetObject)

### [피드백3] 이미지 렌더링 속도가 너무 느립니다.

문제점: 이미지를 업로드 할 경우 이미지 데이터 용량 그대로의 데이터를 업로드하고  데이터를 내려 받기 때문에 모바일 화면에 맞지 않게 데이터 용량이 크다

피드백 개선: 이미지를 업로드 할때 browser-image-compression 라이브러리를 활용하여 이미지를 1MB 이하로 압축시켜 Blob형식을 File 형식으로 변환하여 FormData에 담아 서버전송

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3cd65ee1-123a-4fa7-a9d4-cd3f4cc6ea6e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T140328Z&X-Amz-Expires=86400&X-Amz-Signature=5d3915d21a9ff606544354b643329fff99c1e0fae13eb23ea56dd1790d4e28f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d50dc06e-86d5-4e82-b6e9-86118f47fdf0/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T140349Z&X-Amz-Expires=86400&X-Amz-Signature=e1e808a408353e5894ba7eda637f1e18110d9dc584e1c33dae8183656a4f7024&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### [피드백4] 여행기 작성시 컨셉 태그를 다양하게 누를 수 있다면 좋겠어요! (ex.여행 스타일 - 먹방투어/호캉스 동시 선택 가능하게)

피드백 개선: 유저 입장에서 여행 스타일 항목을 여러 개 선택하고 싶어도 하나의 항목만 선택 해야 하는 단점이 있어 여러 항목을 선택 가능하도록 수정함

![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3858d64-847c-47e8-a843-e2ad7004687f/%EA%B7%B8%EB%A6%BC01.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T140451Z&X-Amz-Expires=86400&X-Amz-Signature=bb64c87b86c397d2d40f5f8a7dde647a0b8b21f68c6e62ad7fc9b296ff0451b9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC01.jpg%22&x-id=GetObject)
![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b39363ed-94fd-434b-862d-9bab9ebf1e4a/%EA%B7%B8%EB%A6%BC02.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220405T140536Z&X-Amz-Expires=86400&X-Amz-Signature=b0013207f53f9e6e5995d232a736309d3bd736bedb07206975e66e8f1681ecc8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25EA%25B7%25B8%25EB%25A6%25BC02.jpg%22&x-id=GetObject)
