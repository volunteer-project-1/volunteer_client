/**
 * 두 날짜 사이의 일 수를 구함.
 *
 * @param startDate 시작 날짜
 * @param endDate 끝 날짜
 * @returns 며칠 차이나는지
 */
export function daysBetweenDates(startDate: Date, endDate: Date) {
  return Math.round((Number(endDate) - Number(startDate)) / (1000 * 60 * 60 * 24));
}
