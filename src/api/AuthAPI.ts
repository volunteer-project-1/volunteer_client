import API from "@/api/API";
import UserAPI from "@/api/UserAPI";
import { dLog } from "@/utils/DebugUtils";

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
}

/**
 * 구직자 로그인.
 */
async function loginSeeker(input: LoginSeekerInput): Promise<LoginSeekerOutput> {
  await API.post(`/api/v1/auth/local`, input);

  // 내 정보 찾기 기능을 이용하여 id를 얻음.
  const profile = await UserAPI.findMyProfile();
  dLog(profile);

  return {
    id: profile.user.id,
  };
}

interface LoginCompanyInput {
  email: string;
  password: string;
}

interface LoginCompanyOutput {
  id: number;
  name: string;
  email: string;
}

/**
 * 구직자 로그인.
 */
async function loginCompany(input: LoginCompanyInput): Promise<LoginCompanyOutput> {
  const response = await API.post(`/api/v1/auth/local/company`, input);
  return response.data;
}

const AuthAPI = {
  createSeeker,
  createCompany,
  loginSeeker,
  loginCompany,
  // doSocialLogin,
};

export default AuthAPI;
