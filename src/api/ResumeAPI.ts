import {
  Resume,
  ResumeInfo,
  Education,
  Career,
  Activity,
  Training,
  Award,
  Portfolio,
  Introduction,
  MyVideo,
  HelperVideo,
  Preference,
  PreferenceLocation,
  PreferenceJob,
  Certificate,
} from "@/types/Resume";
import { AllOptional } from "@/types/Common";
import API from "@/api/API";

interface UploadFileInput {
  file: File;
}

interface UploadFileOutput {
  file: {
    // 정보가 더 있지만 일단 이것들만 사용.
    originalname: string;
    mimetype: string;
    size: number;
    contentType: string;
  };
  url: string;
}

/**
 * 내부용 유틸 함수.
 */
async function uploadFile(input: UploadFileInput, url: string): Promise<UploadFileOutput> {
  const formData = new FormData();
  formData.append("url", input.file);

  const response = await API.post<UploadFileOutput>(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

async function uploadVideo(input: UploadFileInput): Promise<UploadFileOutput> {
  return await uploadFile(input, "/api/v1/resume/video");
}

async function uploadPDF(input: UploadFileInput): Promise<UploadFileOutput> {
  return await uploadFile(input, "/api/v1/resume/pdf");
}

async function uploadAvatar(input: UploadFileInput): Promise<UploadFileOutput> {
  return await uploadFile(input, "/api/v1/resume/avatar");
}

interface CreateResumeInput {
  resume: AllOptional<Omit<Resume, "id" | "user_id">>;
  resumeInfo: AllOptional<Omit<ResumeInfo, "id" | "resume_id">>;

  educations?: AllOptional<Omit<Education, "id" | "resume_id">>[];
  careers?: AllOptional<Omit<Career, "id" | "resume_id">>[];
  activities?: AllOptional<Omit<Activity, "id" | "resume_id">>[];
  trainings?: AllOptional<Omit<Training, "id" | "resume_id">>[];
  certificates?: AllOptional<Omit<Certificate, "id" | "resume_id">>[];
  awards?: AllOptional<Omit<Award, "id" | "resume_id">>[];
  portfolio?: AllOptional<Omit<Portfolio, "id" | "resume_id">>;
  introductions?: AllOptional<Omit<Introduction, "id" | "resume_id">>[];
  myVideo: AllOptional<Omit<MyVideo, "id" | "resume_id">>;
  helperVideo?: AllOptional<Omit<HelperVideo, "id" | "resume_id">>;
  preference?: AllOptional<Omit<Preference, "id" | "resume_id">> & {
    preferenceLocations?: AllOptional<Omit<PreferenceLocation, "id" | "preference_id">>[];
    preferenceJobs?: AllOptional<Omit<PreferenceJob, "id" | "preference_id">>[];
  };
}

async function createResume(input: CreateResumeInput): Promise<void> {
  console.log(input);
  console.log(JSON.stringify(input));
  await API.post<CreateResumeInput>("/api/v1/resume", input);
}

type FindMyResumesOutput = { resumes: Array<Partial<Omit<Resume, "user_id">>> } | string;

async function findMyResumes(): Promise<FindMyResumesOutput> {
  const response = await API.get<FindMyResumesOutput>("/api/v1/resume");
  return response.data;
}

const ResumeAPI = {
  uploadVideo,
  uploadPDF,
  uploadAvatar,
  createResume,
  findMyResumes,
};

export default ResumeAPI;
