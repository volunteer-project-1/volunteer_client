import React, { useEffect } from "react";

import CompanyAPI from "@/company/api/CompanyAPI";
import { useRequest } from "@/common/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/common/store";
import Page from "@/layout/containers/Page";
import InfoSection from "@/company/containers/info-editor/InfoSection";
import IntroductionSection from "@/company/containers/info-editor/IntroductionSection";
import HistorySection from "@/company/containers/info-editor/HistorySection";
import ImageSection from "@/company/containers/info-editor/ImageSection";
import { updateCompany } from "@/company/store/company";

const EditorColumn = () => {
  const account = useStoreSelector(state => state.auth.account);
  const dispatch = useStoreDispatch();
  const doRequest = useRequest();

  useEffect(() => {
    (async () => {
      if (!account) {
        return;
      }

      const company = await doRequest(CompanyAPI.findCompany({ email: account.email }));

      const {
        id,
        email,
        name,
        introduce,
        founded_at,
        member,
        acc_investment,
        homepage,
        phone_number,
        address,
        industry_type,
      } = company;

      dispatch(
        updateCompany({
          id,
          email,
          name,
          introduce,
          founded_at,
          member,
          acc_investment,
          homepage,
          phone_number,
          address,
          industry_type,
        })
      );
    })();
  }, [account, dispatch, doRequest]);

  return (
    <Page.Column fill>
      <InfoSection />
      <IntroductionSection />
      {/*
      <HistorySection />
      */}
      {/*
      <ImageSection />
      */}
    </Page.Column>
  );
};

export default EditorColumn;
