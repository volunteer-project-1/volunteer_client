/**
 * @file 서버에서 데이터를 받아오거나 데이터를 보내는 도구들의 모음.
 */

import { companyList, seekerList } from '@/api/DummyDB';

/**
 * 구직자 리스트를 받아옴.
 */
export async function getSeekerList() {
  return seekerList;
}

/**
 * 회사 리스트를 받아옴.
 */
export async function getCompanyList() {
  return companyList;
}
