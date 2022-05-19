import { useUID } from "react-uid";

/**
 * Element에 id를 붙여야 할 때 사용.
 * 적절한 id를 하나 생성해줌.
 */
export function useID() {
  const uid = useUID();
  return `seeme-${uid}`;
}
