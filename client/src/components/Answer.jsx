import { useState } from 'react';
import { SmallButton } from '../style/QuestionDetail';
import { api } from '../api/api';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { StyledContainer } from '../style/Answer';

const Answer = (props) => {
  const [answer, setAnswer] = useState(props.answer ? props.answer : {});
  const [editedContent, setEditedContent] = useState('');
  const [editing, setEditing] = useState(false);
  const user = useSelector((state) => state.user);

  const handleEdit = (currentContent) => {
    setEditedContent(currentContent);
    setEditing(true);
  };

  const handleSaveEdit = async () => {
    if (editedContent.trim() !== '') {
      setAnswer({ ...answer, content: editedContent });
      setEditing(false);
      setEditedContent('');
      try {
        const response = await api(
          `/question/${props.questionId}/answers/${answer.answerId}`,
          'patch',
          { editedContent }
        );
        if (response.success) {
          console.log(response);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    }
  };

  return (
    <StyledContainer>
      {/* 답변 목록을 맵핑하여 각 답변을 렌더링 */}
      <div className='answer-container' key={answer.id}>
        <div className='author-container'>
          <div className='author'>{answer.author}</div>
          <div className='author-right-container'>
            {user.memberId === answer.memberId ? (
              <div className='my-text'>
                <div
                  onClick={() => handleEdit(answer.content)}
                  aria-hidden='true'
                >
                  <span>수정</span>
                </div>
                <div
                  onClick={() => props.handleDelete(answer.answerId)}
                  aria-hidden='true'
                >
                  <span>삭제</span>
                </div>
              </div>
            ) : null}
            <div className='time'>{answer.createdAt}</div>
          </div>
        </div>
        {editing ? (
          <div>
            {/* 편집 중인 답변의 내용을 입력하는 텍스트 에어리어 */}
            <textarea
              className='editarea'
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            {/* 수정된 답변을 저장하는 버튼 */}
            <SmallButton onClick={handleSaveEdit}>Save</SmallButton>
          </div>
        ) : (
          <div>
            <div className='content'>
              {/* 답변 내용을 표시 */}
              {answer.content}
            </div>
          </div>
        )}
      </div>
    </StyledContainer>
  );
};

export default Answer;
