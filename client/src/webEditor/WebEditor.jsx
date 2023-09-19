const { ClassicEditor } = window;
import { CKEditor } from '@ckeditor/ckeditor5-react';
import '../../ckeditor5/build/ckeditor';
import styled from 'styled-components';

const MyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function WebEditor({ onChange }) {
  return (
    <MyDiv>
      <CKEditor
        editor={ClassicEditor} // ESLint가 에러로 잡긴 하지만, 실제로는 import 되어있기 때문에 걱정하지 않으셔도 됩니다!
        data=''
        onChange={(event, editor) => {
          const data = editor.getData(); // 이게 웹 에디터에서 데이터를 받아오는거고
          console.log(data); // 이 데이터를 콘솔창에 출력
          onChange(data);
        }}
      />
    </MyDiv>
  );
}

export default WebEditor;
