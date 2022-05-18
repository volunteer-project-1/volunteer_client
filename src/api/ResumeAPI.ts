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
  resume: Omit<Resume, "id" | "user_id">;
  resumeInfo: Omit<ResumeInfo, "id" | "resume_id">;
  educations?: Omit<Education, "id" | "resume_id">[];
  careers?: Omit<Career, "id" | "resume_id">[];
  activities?: Omit<Activity, "id" | "resume_id">[];
  trainings?: Omit<Training, "id" | "resume_id">[];
  certificates?: Omit<Certificate, "id" | "resume_id">[];
  awards?: Omit<Award, "id" | "resume_id">[];
  portfolio?: Omit<Portfolio, "id" | "resume_id">;
  introductions?: Omit<Introduction, "id" | "resume_id">[];
  myVideo: Omit<MyVideo, "id" | "resume_id">;
  helperVideo?: Omit<HelperVideo, "id" | "resume_id">;
  preference?: Omit<Preference, "id" | "resume_id"> & {
    preferenceLocations?: Omit<PreferenceLocation, "id" | "preference_id">[];
    preferenceJobs?: Omit<PreferenceJob, "id" | "preference_id">[];
  };
}

async function createResume(input: CreateResumeInput): Promise<void> {
  await API.post<CreateResumeInput>("/api/v1/resume", input);
}

const ResumeAPI = {
  uploadVideo,
  uploadPDF,
  uploadAvatar,
  createResume,
};

export default ResumeAPI;
