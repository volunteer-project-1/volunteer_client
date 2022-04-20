/**
 * 탐색기를 열어 파일 업로드 기능을 제공하는 함수.
 *
 * @param accept 어떤 형식의 파일들을 받을지
 * @param multiple 파일 여러 개 업로드를 허용할지
 */
export function openFileDialog(accept: string, multiple: boolean) {
  return new Promise<Array<File>>((resolve, reject) => {
    const fileElement = document.createElement("input");

    fileElement.type = "file";
    fileElement.accept = accept;
    fileElement.multiple = multiple;

    fileElement.onchange = () => {
      const files = Array.from(fileElement.files ?? []);
      resolve(files);
    };

    fileElement.onerror = () => {
      reject();
    };

    fileElement.click();
  });
}
