/**
 * @file 서버 쪽에 아직 구현이 안 되어 사용하는 임시적인 데이터들.
 */

/**
 * 각 회사의 정보.
 * TODO: 임시 데이터. 재구성 예정.
 */
export interface Company {
  id: number;
  name: string;
  imageURL: string;
  description: string;
  // 마감 날짜. (null이면 상시 채용)
  dueDate: number | null;
}

/**
 * 각 구직자의 정보.
 * TODO: 임시 데이터. 재구성 예정.
 */
export interface Seeker {
  id: number;
  name: string;
  imageURL: string;
  age: number;
  sex: "남" | "여";
  address: string;
  job: string;
  career: string;
  handicap: string;
}
