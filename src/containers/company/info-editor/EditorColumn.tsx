import React, { useEffect } from "react";

import CompanyAPI from "@/api/CompanyAPI";
import { useRequest } from "@/utils/APIUtils";
import { useStoreSelector, useStoreDispatch } from "@/states";
import Page from "@/components/page";
import InfoSection from "@/containers/company/info-editor/InfoSection";
import IntroductionSection from "@/containers/company/info-editor/IntroductionSection";
import HistorySection from "@/containers/company/info-editor/HistorySection";
import ImageSection from "@/containers/company/info-editor/ImageSection";
import { updateCompany } from "@/states/company";

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
