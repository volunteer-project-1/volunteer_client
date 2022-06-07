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
  created_at: Date;
  updated_at: Date;
}>;

async function findCompany(input: FindCompanyInput): Promise<FindCompanyOutput> {
  const response = await API.patch<FindCompanyOutput>(`/api/v1/company`, { email: input.email });
  return response.data;
}

const CompanyAPI = {
  updateCompany,
  updateCompanyHistory,
  findCompany,
};

export default CompanyAPI;
