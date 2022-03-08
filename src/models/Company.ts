import { UserID } from "@/models/ID";

/**
 * 각 회사의 정보.
 */
export interface Company {
  id: UserID;
  name: string;
  imageURL: string;
  description: string;
  // 마감 날짜. (null이면 상시 채용)
  dueDate: number | null;
}
