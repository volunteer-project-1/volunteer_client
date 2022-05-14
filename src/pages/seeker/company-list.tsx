import React from "react";
import Link from "next/link";

import Page from "@/components/page";
import CompanySection from "@/containers/seeker/company-list/CompanySection";
import ResultSection from "@/containers/seeker/company-list/ResultSection";

/**
 * 기업 리스트 페이지.
 */
const CompanyListPage = () => (
  <Page>
    <Page.Title>인기있는 채용공고</Page.Title>
    <CompanySection />
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
);

export default CompanyListPage;
