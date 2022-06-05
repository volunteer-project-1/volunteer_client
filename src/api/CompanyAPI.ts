import { AllOptional } from "@/types/Common";
import { Company, CompanyHistory } from "@/types/Company";
import API from "@/api/API";

type UpdateCompanyInput = AllOptional<Company>;

async function updateCompany(input: UpdateCompanyInput): Promise<void> {
  await API.patch(`/api/v1/company`, input);
}

type UpdateCompanyHistoryInput = AllOptional<CompanyHistory>;

async function updateCompanyHistory(input: UpdateCompanyHistoryInput): Promise<void> {
  const { id, ...item } = input;
  id && (await API.patch(`/api/v1/company/${id}/history`, item));
}

const CompanyAPI = {
  updateCompany,
  updateCompanyHistory,
};

export default CompanyAPI;
