import React, { useEffect, useState } from "react";

import InfoAPI from "@/api/InfoAPI";
import { Company } from "@/types/Info";
import Card from "@/components/card";
import "@/containers/seeker/company-list/CompanySection.scoped.scss";

const CompanySection = () => {
  const [currentCompanyList, setCurrentCompanyList] = useState<Array<Company>>([]);

  useEffect(() => {
    (async () => {
      setCurrentCompanyList(await InfoAPI.getCompanyList());
    })();
  }, []);

  return (
    <div className="companySection">
      {currentCompanyList.map(company => (
        <Card.Company key={company.id} company={company} />
      ))}
    </div>
  );
};

export default CompanySection;
