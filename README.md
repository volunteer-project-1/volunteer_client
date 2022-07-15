# volunteer_client

## About

장애인을 위한 직장 소개 앱 프론트엔드 코드

- [Notion](https://www.notion.so/SeeMe-dfdcbdb7258e47feafd95d02507df6f3)

## Keywords

- Seeker: 구직자를 의미
- Company: 회사를 의미
- User = Seeker (원래는 구직자, 회사 둘 다를 의미했던거 같으나 서버 상에서 현재 구직자에게만 적용됨)

## How to run

필요 라이브러리 설치

- [Node.js](https://nodejs.org/ko/) 설치
- Yarn 설치: `npm install -g yarn`
- 필요 라이브러리들 설치: `yarn`

설치 추천하는 도구들

- [React devtools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko)
- [Redux devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)

개발 모드 빌드 & 실행

- `yarn dev`로 개발 모드 빌드 & 개발 서버 실행
- 웹 브라우저에서 <http://localhost:3000>으로 접속하세요.
- 접속한 상태에서 코드를 변경하고 저장하면 웹페이지가 자동으로 업데이트됩니다.

배포 모드 빌드 & 실행

- `yarn build`로 배포 모드 빌드
- `yarn start`로 배포 서버 실행

~~정적 사이트 생성~~

- `yarn build`로 배포 모드 빌드
- `yarn export`로 정적 사이트 생성 (Static Site Generation)
- 현재 사이트 실행에 Next.js 서버가 필수이므로 이 기능은 사용하지 않습니다.

코드 스타일 체크

- `yarn lint`로 JS/TS 코드 스타일 체크
- `yarn lint:fix`를 하면 체크뿐만 아니라 수정까지 이루어집니다.

## How to deploy

Serverless 이용한 배포

(1) .env 파일 생성

- 형식: .env.example 참고
- [링크](https://velog.io/@jeffyoun/Serverless-프레임워크-사용해서-배포하기) 참고하여 AWS access key 얻기

(2) 배포

- `yarn deploy` 실행
- 시간이 좀 오래 걸립니다... (몇분 정도 걸림)

Heroku 이용한 배포 (포트 고정이 불가능하여 현재는 사용 X)

(1) 필요 도구들 설치

- Heroku CLI 설치

(2) Heroku app 생성

- Heroku 가입 후 app 생성

(3) git과 연결

- `heroku git:remote -a (앱 이름)`

(4) 배포

- `git push heroku master`

## Pages

페이지 목록은 src/constants/Routes.ts를 참고해주세요.

## Project structure

- public
  - assets: Static assets (ex. 이미지, 비디오, ...)
- src
  - types: 공통 자료형 모음
  - api: 요청 관련 로직 모음
  - scss: 공통 스타일 코드(SCSS) 모음
  - store: 전역 상태 (Redux)
  - utils: 유틸성 로직들
  - components: 공통 component (Menu, Button, ...)
  - containers: 큰 단위의 component (Header, footer, 각 section, ...)
  - pages: 각 페이지(URL)를 나타내는 component

## Architecture

![Architecture](https://user-images.githubusercontent.com/6301066/171983428-46ca40ab-f1d7-4833-9ae7-0a4dcbbf675a.png)
