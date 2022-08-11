import React from "react";
import SlickSlider, { Settings } from "react-slick";
import Link from "next/link";

import "@/containers/home/NoticeSlider.scoped.scss";

interface SliderItem {
  img: string;
  group: string;
  title: string;
  url: string;
}

const sliderItems: Array<SliderItem> = [
  {
    img: "/assets/home/main_img01@2x.jpg",
    group: "채용정보",
    title: "2022년 공개채용 기업 보러가기",
    url: "https://job.seoul.go.kr/jobable/board.do?method=selectCenterNewsList",
  },
  {
    img: "/assets/home/main_img02@2x.jpg",
    group: "행사정보",
    title: "2022년 하계 미니 패럴림픽 참가신청",
    url: "https://www.paralympic.org/",
  },
  {
    img: "/assets/home/main_img03@2x.jpg",
    group: "채용정보",
    title: "2022년 취업 설명회 사전 신청하기",
    url: "https://job.seoul.go.kr/jobable/board.do?method=selectCenterNewsList",
  },
];

const NoticeSlider = () => {
  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="noticeSlider">
      <SlickSlider {...settings}>
        {sliderItems.map((item, i) => (
          <div key={i} className="descriptionNotice_wrap">
            <Link href={item.url}>
              <a className="link">
                {item.img ? (
                  <div className="img">
                    <img src={item.img} alt="" />
                  </div>
                ) : (
                  <div className="no_img blind">미리보기 이미지가 없습니다</div>
                )}
                <div className="box">
                  <span className="group">{item.group}</span>
                  <p className="title">{item.title}</p>
                  <div className="icon" />
                  <div className="more">
                    <span className="blind">더보기</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </SlickSlider>
    </div>
  );
};

export default NoticeSlider;
