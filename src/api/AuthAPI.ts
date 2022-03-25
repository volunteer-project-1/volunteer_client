import API from "@/api/API";

async function doSocialLogin() {
  // 구글 로그인 후 원래 페이지로 돌아옴.
  // (이미 로그인 되어 있으면 암것도 안함.)
  window.location.href = "/api/v1/auth/google";
}

interface LocalJoinRequest {
  email: string;
  password: string;
  passwordConfirm: string;
}

async function doLocalJoin(data: LocalJoinRequest): Promise<void> {
  await API.post("/api/v1/auth/local/signup", data);
}

interface LocalLoginRequest {
  email: string;
  password: string;
}

async function doLocalLogin(data: LocalLoginRequest): Promise<void> {
  await API.post("/api/v1/auth/local", data);
}

const AuthAPI = {
  doSocialLogin,
  doLocalJoin,
  doLocalLogin,
};

export default AuthAPI;
