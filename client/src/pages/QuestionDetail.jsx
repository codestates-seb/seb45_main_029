// import { useEffect, useState } from 'react';
// import BoardNav from '../components/BoardNav';
// import QuestionList from '../components/QuestionList';
// import { useParams } from 'react-router-dom';
// import parse from 'html-react-parser';

// import { api } from '../api/api';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';

// const DetailMainContent = styled.div`
//   display: flex;
//   margin-left: 10.75rem;
// `;

// const Line = styled.hr`
//   width: 73.5rem;
//   height: 0.0625rem;
//   background: #828080;
// `;

// const NavContainer = styled.div`
//   width: 8rem;
//   height: 8rem;
//   border: 1px solid gray;
//   border-radius: 1rem;
//   margin-left: 5rem;
//   margin-top: 5rem;
//   margin-right: 5rem;
// `;

// const DetailContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 5.3rem;
//   width: 73.5rem;
//   height: 56.25rem;
// `;

// const TitleContainer = styled.title`
//   display: flex;
//   flex-direction: column;
//   margin-top: 5.33rem;
//   .title {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     width: 73.5rem;
//     height: 5.5rem;
//   }
// `;

// const QuestionDetail = () => {
//   const { questionId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const [question, setQuestion] = useState(question || []);

//   const userInfo = useSelector((state) => state.user);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await api(
//           `/question?page=1&size=10&type=1/${questionId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${
//                 userInfo.accessToken ||
//                 JSON.parse(window.localStorage.getItem('info')).accessToken
//               }`,
//             },
//           }
//         );
//         setQuestion(data.data.question);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);

//   return (
//     <DetailMainContent>
//       <NavContainer>
//         <BoardNav color='third' />
//       </NavContainer>
//       <DetailContainer>
//         <TitleContainer>
//           <div>
//             {loading ? (
//               <h2>loading...</h2>
//             ) : (
//               <QuestionList
//                 questionId={question.questionId}
//                 title={question.title}
//                 content={parse(question.content)}
//                 createdAt={question.createdAt}
//               />
//             )}
//           </div>
//         </TitleContainer>
//         <Line />
//       </DetailContainer>
//     </DetailMainContent>
//   );
// };
// export default QuestionDetail;
