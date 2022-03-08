import { UserID } from "@/models/ID";

/**
 * 각 구직자의 정보.
 */
export interface Seeker {
  id: UserID;
  name: string;
  imageURL: string;
  age: number;
  gender: "남" | "여";
  address: string;
  job: string;
  career: string;
  handicap: string;
}
