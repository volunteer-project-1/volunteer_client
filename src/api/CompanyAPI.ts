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

interface FindCompanyInput {
  email: string;
}

type FindCompanyOutput = AllOptional<{
  id: number;
  name: string;
  email: string;
  introduce: string;
  founded_at: string;
  member: number;
  acc_investment: number;
  homepage: string;
  phone_number: string;
  address: string;
  industry_type: string;
  created_at: string;
  updated_at: string;
}>;

async function findCompany(input: FindCompanyInput): Promise<FindCompanyOutput> {
  const patchResponse = await API.patch<{ company: { id: number } }>(`/api/v1/company`, { email: input.email });
  const id = patchResponse.data.company.id;

  const response = await API.get<{ companys: Array<FindCompanyOutput> }>(`/api/v1/company?start=${id}&limit=1`);
  return response.data.companys[0];
}

const CompanyAPI = {
  updateCompany,
  updateCompanyHistory,
  findCompany,
};

export default CompanyAPI;
