# volunteer_client

## About

장애인을 위한 직장 소개 앱 프론트엔드 코드

## How to run

필요 라이브러리 설치

- [Node.js](https://nodejs.org/ko/) 설치
- `npm install`로 라이브러리들 설치

설치 추천하는 도구들

- [React devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [Redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

실행

- `npm run dev`로 개발 모드 빌드 & 개발 서버 실행
  - 웹 브라우저에서 <http://localhost:3000>으로 접속하세요.
  - 접속한 상태에서 코드를 변경하고 저장하면 웹페이지가 자동으로 업데이트됩니다.
- `npm run start`로 배포 모드 빌드 & 서버 실행
  - 웹 브라우저에서 <http://localhost:3000>으로 접속하세요.
- `npm run export`로 정적 사이트 생성 (Static Site Generation)
- `npm run lint`로 JS/TS 코드 스타일 체크
  - `npm run lint:fix`를 하면 체크 & 수정까지 이루어집니다.

## Pages

- /: 메인 페이지 ('home')
- /search: 구인 검색, 구직 검색, 추천 검색, 인터뷰 요청 및 연결
- /seeker: 구직활동 (**구직자**를 위한 서브 페이지들)
  - /resume-editor: 구직자 프로필 작성 (이력서 작성)
  - /company-list: 기업 리스트
  - /company-info?...: 채용정보, 접수기간, 기업정보
- /company: 인재채용 (**기업**을 위한 서브 페이지들)
  - /info-editor: 기업 프로필 작성
  - /seeker-list: 구직자 리스트
  - /seeker-resume?...: 구직자 프로필 보기 (이력서 보기)
- /notice: 고객센터
- /member: 개인정보 관리, 지원내역, 환경설정, ...

## Project structure

- src
  - api: 요청 관련 로직 모음
  - assets
    - scss: 공통 스타일 코드(SCSS) 모음
  - images: 이미지 모음
  - pages: 각 페이지(URL)를 나타내는 component
  - components: 공통 component (Menu, layout, etc.)
  - views: /components의 내용물들을 조합해서 만든 큰 단위의 component
  - models: 데이터 인터페이스 (interface, type 등 모음)
  - store: 전역 상태 (Redux)
  - utils: 유틸성 로직들
