/**
 * @file 서버에서 데이터를 받아오거나 데이터를 보내는 도구들의 모음.
 */

import { UserID } from "@/models/ID";
import { seekerDB, companyDB, seekerLikeDB, companyLikeDB } from "@/api/DummyDB";
import { strictValues } from "@/utils/TypeUtils";

/**
 * 구직자 리스트를 받아옴.
 */
export async function getSeekerList() {
  return strictValues(seekerDB);
}

/**
 * 구직자가 회사에 좋아요를 눌렀는지 반환.
 */
export async function getSeekerLike(seekerID: UserID, companyID: UserID) {
  return seekerLikeDB[seekerID].has(companyID);
}

/**
 * 구직자가 회사에 좋아요를 누름 or 취소.
 */
export async function setSeekerLike(seekerID: UserID, companyID: UserID, like: boolean) {
  if (like) {
    seekerLikeDB[seekerID].add(companyID);
  } else {
    seekerLikeDB[seekerID].delete(companyID);
  }
}

/**
 * 회사 리스트를 받아옴.
 */
export async function getCompanyList() {
  return strictValues(companyDB);
}

/**
 * 회사가 구직자에 좋아요를 눌렀는지 반환.
 */
export async function getCompanyLike(companyID: UserID, seekerID: UserID) {
  return companyLikeDB[companyID].has(seekerID);
}

/**
 * 회사가 구직자에 좋아요를 누름 or 취소.
 */
export async function setCompanyLike(companyID: UserID, seekerID: UserID, like: boolean) {
  if (like) {
    companyLikeDB[companyID].add(seekerID);
  } else {
    companyLikeDB[companyID].delete(seekerID);
  }
}
