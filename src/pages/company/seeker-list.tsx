import React from "react";
import Link from "next/link";

import Wrapper from "@/components/wrapper";
import Page from "@/components/page";
import SeekerSection from "@/containers/company/seeker-list/SeekerSection";
import ResultSection from "@/containers/company/seeker-list/ResultSection";

/**
 * 구직자 리스트 페이지.
 */
const SeekerListPage = () => (
  <Wrapper.Auth allowedAccountTypes={["company"]}>
    <Page>
      <Page.Title>TOP 인재</Page.Title>
      <SeekerSection />
      <Page.Columns>
        <Page.Column>
          <Link href="https://www.kead.or.kr/view/service/service04_02_01.jsp?sub2=1">
            <a>
              <img src="/assets/company/banner.svg" alt="배너" />
            </a>
          </Link>
        </Page.Column>
        <Page.Column fill>
          <ResultSection />
        </Page.Column>
      </Page.Columns>
    </Page>
  </Wrapper.Auth>
);

export default SeekerListPage;
