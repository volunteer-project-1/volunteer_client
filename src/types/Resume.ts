import { DISABLILITY_LEVEL, DISABLILITY_TYPE } from "@/constants/Resume";
import { DefaultTime } from "@/types/Common";

export type DisabilityLevel = typeof DISABLILITY_LEVEL[number];
export type DisabilityType = typeof DISABLILITY_TYPE[number];
export type Sex = "남" | "여";

export interface Resume extends DefaultTime {
  id: number;
  title: string;
  content: string;
  is_public: boolean;
  user_id: number;
}

export interface ResumeInfo {
  id: number;
  resume_id: number;
  name: string;
  birthday: string;
  phone_number: string;
  email: string;
  sido: string;
  sigungu: string;
  disability_level?: DisabilityLevel;
  disability_type?: DisabilityType;
  sex: Sex;
  avatar?: string;
}

export interface Education {
  id: number;
  resume_id: number;
  type: string;
  school_name: string;
  graduation_year: string;
  admission_year: string;
  is_graduated: boolean;
  major: string;
  credit: number;
  total_credit: number;
}

export interface Career {
  id: number;
  resume_id: number;
  company: string;
  department: string;
  position: string;
  task: string;
  joined_at: string;
}

export interface Activity {
  id: number;
  resume_id: number;
  organization: string;
  description: string;
}

export interface Training {
  id: number;
  name: string;
  institute: string;
  content: string;
  resume_id: number;
  started_at: string;
  finished_at: string;
}

export interface Certificate {
  id: number;
  resume_id: number;
  name: string;
  institute: string;
  acquisition_at: string;
}

export interface Award {
  id: number;
  resume_id: number;
  institute: string;
  started_at: string;
  finished_at: string;
}

export interface Portfolio {
  id: number;
  resume_id: number;
  url: string;
}

export interface Introduction {
  id: number;
  resume_id: number;
  title: string;
  content: string;
}

export interface MyVideo {
  id: number;
  resume_id: number;
  url: string;
}

export interface HelperVideo {
  id: number;
  resume_id: number;
  url: string;
}

export interface Preference {
  id: number;
  resume_id: number;
  employ_type: number;
  salary: number;
}

export interface PreferenceLocation {
  id: number;
  preference_id: number;
  sido: string;
  sigungu: string;
}

export interface PreferenceJob {
  id: number;
  preference_id: number;
  name: string;
}
