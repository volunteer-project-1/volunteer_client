const ROUTES = {
  // 메인 페이지.
  home: "/",
  auth: {
    // 회원가입.
    join: "/auth/join",
    // 로그인.
    login: "/auth/login",
  },
  // 구직활동 (**구직자**를 위한 서브 페이지들)
  seeker: {
    // 구직자 프로필 작성.
    resumeEditor: "/seeker/resume-editor",
    // 기업 리스트.
    companyList: "/seeker/company-list",
    // 기업 정보. (Params: company-id, section)
    companyInfo: "/seeker/company-info",
  },
  // 인재채용 (**기업**을 위한 서브 페이지들)
  company: {
    // 기업 프로필 작성.
    infoEditor: "/company/info-editor",
    // 채용공고 작성.
    jobEditor: "/company/job-editor",
    // 구직자 리스트.
    seekerList: "/company/seeker-list",
    // 구직자 프로필 보기. (Params: seeker-id)
    seekerResume: "/company/seeker-resume",
  },
  news: {
    // 뉴스 리스트.
    newsList: "/news/news-list",
    // 뉴스 내용.
    newsContent: "/news/news-content",
  },
  // 고객센터.
  notice: "/notice",
  // 마이페이지.
  mypage: "/mypage",
};

export default ROUTES;
