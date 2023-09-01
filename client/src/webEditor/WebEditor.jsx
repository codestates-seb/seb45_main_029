import { CKEditor } from "@ckeditor/ckeditor5-react";
import "../../ckeditor5/build/ckeditor";
import styled from "styled-components";

const MyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function WebEditor() {
  return (
    <MyDiv>
      <CKEditor
        editor={ClassicEditor} // ESLint가 에러로 잡긴 하지만, 실제로는 import 되어있기 때문에 걱정하지 않으셔도 됩니다!
        data="<p><span style='color:hsl(0, 0%, 0%);'>입력하세요</span></p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </MyDiv>
  );
}

export default WebEditor;
