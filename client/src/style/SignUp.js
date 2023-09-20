import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 23.5625rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.1875rem 3.125rem 1.25rem;
  width: 56.25rem;
  border-radius: 35px;
  border: 1px solid #404040;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);

  .info-container {
    width: 100%;
  }

  .info-container > div {
    margin: 0.9375rem 0 0;
  }

  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 2rem;
    padding-bottom: 0.625rem;
    border-bottom: 1px solid #404040;
    margin: 0 0 1.875rem;
  }

  .title {
    font-size: 1.125rem;
    margin: 0 0 0.625rem;
  }

  .input-container input {
    width: 90%;
    height: 3.125rem;
    padding: 0.625rem;
    border-radius: 10px;
    border: 1px solid #404040;
    font-size: 1rem;
  }

  .email-check-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    width: 50px;
    height: 50px;
    font-size: 1.125rem;
    font-family: var(--nanum);
    background-color: var(--blue);
    color: var(--white);
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #6187ff;
    }
  }

  .error-message {
    color: #f56565;
    font-weight: 600;
    font-size: 1rem;
    margin: 0.625rem 0 0;
  }
`;

export const ArticleList = styled.article`
  margin: 1.5625rem 0 0;
  width: 100%;
`;

export const PainSpan = styled.p`
  font-size: 1.125rem;
  margin: 0 0 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  .job-list {
    color: var(--navy);
    font-size: 1.25rem;
  }
`;

export const JobChoice = styled.div`
  width: 100%;

  > ul {
    display: flex;
    justify-content: space-between;
    gap: 0.625rem;
    padding: 0.9375rem 0;
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
  }
  > ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }
  > ul li input {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    accent-color: rgb(187, 68, 185);
  }
  > ul li label {
    font-size: 0.875rem;
  }
`;

export const PainListContainer = styled.div`
  display: flex;
  margin: 1.875rem 0 0;
`;

export const PainChoice = styled.div`
  width: 100%;
  margin: 0 0 5.9375rem;

  > ul {
    display: flex;
    justify-content: space-between;
    padding: 1.5625rem 0;
    border-top: 1px solid #404040;
    border-bottom: 1px solid #404040;
  }
  > ul li {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
  }
  > ul li label {
    font-size: 1.125rem;
  }
  > ul li input {
    width: 1.25rem;
    height: 1.25rem;
    accent-color: rgb(187, 68, 185);
  }
`;
