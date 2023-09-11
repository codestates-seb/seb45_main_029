// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import BoardNav from '../components/BoardNav';
// import { useSelector } from "react-redux";
import QuaOrEdit from '../components/QuaOrEdit';
import AnswerOrEdit from '../components/AnswerOrEdit';

import {
  Line,
  QuestionDetailContainer,
  NavContainer,
  DetailContent,
} from '../style/QuestionDetail';

const QuestionDetail = () => {
  const [editedContent, setEditedContent] = useState('');
  const [editedTitle, setEditedTitle] = useState('');

  // const user = useSelector((state) => state.user);

  const OnChangeTitle = (e) => {
    setEditedTitle(e.currentTarget.value);
  };

  const OnChangeContent = (e) => {
    setEditedContent(e.currentTarget.value);
  };

  const onClickButton = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <QuestionDetailContainer>
        <NavContainer>
          <BoardNav color='third' />
        </NavContainer>
        <DetailContent>
          <QuaOrEdit
            editedTitle={editedTitle}
            editedContent={editedContent}
            handleOnChangeTitle={OnChangeTitle}
            handleOnChangeContent={OnChangeContent}
            handleUpdatedQa={onClickButton}
            handleDeleteQuestion={onClickButton}
          />
          <Line />
          <AnswerOrEdit
            editedTitle={editedTitle}
            editedContent={editedContent}
            handleOnChangeTitle={OnChangeTitle}
            handleOnChangeContent={OnChangeContent}
            handleUpdatedAn={onClickButton}
            handleDeleteAnswer={onClickButton}
          />
          <Line />
        </DetailContent>
      </QuestionDetailContainer>
    </>
  );
};
export default QuestionDetail;
