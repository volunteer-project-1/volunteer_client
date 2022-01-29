# volunteer_client

## About

장애인을 위한 직장 소개 앱 프론트엔드 코드

## How to run

필요 라이브러리 설치

- Node.js 설치 (>= 7버전)
- `npm install`로 라이브러리들 설치

실행

- `npm run dev`로 개발 모드 빌드 & 개발 서버 실행
  - 웹 브라우저에서 `http://localhost:3000`으로 접속하세요.
- `npm run start`로 배포 모드 빌드 & 서버 실행
  - 웹 브라우저에서 `http://localhost:3000`으로 접속하세요.
- `npm run export`로 정적 사이트 생성 (Static Site Generation)
- `npm run lint`로 JS/TS 코드 스타일 체크
  - `npm run lint:fix`를 하면 체크 & 수정까지 이루어집니다.

## Pages

- index: 메인 페이지
- about ('Hi-Jo'): 회사소개, 미션/비전, 미디어 뉴스
- search: 구인 검색, 구직 검색, 추천 검색, 인터뷰 요청 및 연결
- seeker ('Hire Me'): 동영상 등록, 추천 영상 등록, 포트폴리오 등록
- company ('Join Us'): 동영상 등록, 단체소개서(회사소개서) 등록, 결제
- helper ('Learning Center'): 자기소개지원, 잡마켓정보, 멘토링 지원
- notice ('고객센터'): 공지사항, FAQ, Q&A
- member ('My Page'): 개인정보관리, 자기소개영상관리, 포트폴리오 관리, 지원내역, 환경설정

## Project structure

- src
  - api: 요청 관련 로직 모음
  - assets
    - scss: 공통 스타일 코드(SCSS) 모음
  - images: 이미지 모음
  - pages: 각 경로의 페이지 component
  - components: 공통 component (Menu, layout, etc.)
  - views: 공통 조합해서 만든 상세한 component
  - model: 데이터 인터페이스 (interface, type 등 모음)
  - utils: 유틸성 로직들
