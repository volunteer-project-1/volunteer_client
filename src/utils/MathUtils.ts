export function range(start: number, limit: number, step = 1) {
  const result: Array<number> = [];

  for (let i = start; i < limit; i += step) {
    result.push(i);
  }

  return result;
}

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

/**
 * 날짜를 문자열로 변환.
 * (ex. 2022.02.18)
 */
export function dateToString(date: Date) {
  const yearString = date.getFullYear();
  const monthString = `${date.getMonth() + 1}`.padStart(2, "0");
  const dateString = `${date.getDate()}`.padStart(2, "0");

  return `${yearString}.${monthString}.${dateString}`;
}
