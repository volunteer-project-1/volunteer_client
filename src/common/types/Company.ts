import { DefaultTime } from "@/common/types/Common";

export interface Company {
  id: number;
  email: string;
  name: string;
  introduce: string;
  founded_at: string;
  member: number;
  acc_investment: number;
  homepage: string;
  phone_number: string;
  address: string;
  industry_type: string;
}

export interface CompanyHistory extends DefaultTime {
  id: number;
  content: string;
  history_at: string;
  user_id: string;
}

export interface JobDescription {
  id: number;
  started_at: string;
  deadline_at: string;
  category: string;
  company_id: string;
}

export interface JobDetail {
  id: number;
  title: string;
  num_recruitment: number;
  role: string;
  requirements: string;
  priority: string;
  job_description_id: string;
}

export interface WorkCondition {
  id: number;
  type: string;
  time: string;
  place: string;
  job_description_id: string;
}

export interface JdStep {
  id: number;
  step: number;
  title: string;
  job_description_id: string;
}

export interface Welfare {
  id: number;
  title: string;
  content: string;
  job_description_id: string;
}
