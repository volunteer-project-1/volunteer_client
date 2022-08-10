import API from "@/common/api/API";
import UserAPI from "@/seeker/api/UserAPI";
import { dLog } from "@/common/utils/DebugUtils";

interface CreateSeekerInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

/**
 * 구직자 회원가입.
 */
async function createSeeker(input: CreateSeekerInput): Promise<void> {
  await API.post("/api/v1/auth/local/signup/user", input);
}

interface CreateCompanyInput {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

/**
 * 회사 회원가입.
 */
async function createCompany(input: CreateCompanyInput): Promise<void> {
  await API.post("/api/v1/auth/local/signup/company", input);
}

/**
 * 소셜 로그인.
 */
async function doSocialLogin() {
  // 구글 로그인 후 원래 페이지로 돌아옴.
  // (이미 로그인 되어 있으면 암것도 안함.)
  window.location.href = "/api/v1/auth/google";
}

interface LoginSeekerInput {
  email: string;
  password: string;
}

interface LoginSeekerOutput {
  id: number;
  email: string;
}

/**
 * 구직자 로그인.
 */
async function loginSeeker(input: LoginSeekerInput): Promise<LoginSeekerOutput> {
  await API.post<void>(`/api/v1/auth/local`, input);

  // 내 정보 찾기 기능을 이용하여 id를 얻음.
  const profile = await UserAPI.findMyProfile();
  dLog(profile);

  return {
    id: profile.user.id,
    email: input.email,
  };
}

interface LoginCompanyInput {
  email: string;
  password: string;
}

interface LoginCompanyOutput {
  email: string;
}

/**
 * 구직자 로그인.
 */
async function loginCompany(input: LoginCompanyInput): Promise<LoginCompanyOutput> {
  await API.post<LoginCompanyOutput>(`/api/v1/auth/local/company`, input);

  return {
    email: input.email,
  };
}

async function logout(): Promise<void> {
  try {
    await API.get<void>(`/api/v1/auth/logout`);
  } catch (error) {
    // 로그아웃 시 서버에서 로그아웃 처리 후 클라이언트에게 redirect 지시도 내리는데,
    // 이 때 localhost으로 이동하도록 되어 있어서 데모 등에서는 로그아웃이 에러남.
    // 따라서... 일단은 에러 무시하고 진행하도록 임시 처리.
  }
}

const AuthAPI = {
  createSeeker,
  createCompany,
  loginSeeker,
  loginCompany,
  logout,
  // doSocialLogin,
};

export default AuthAPI;
