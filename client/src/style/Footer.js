import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--navy);
  padding: 5.3125rem 0;
`

export const FooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--white);

  .left_box{
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .left_box h3{
    font-size: 1.25rem;
  }
  .text_box{
    display: flex;
    gap: .9375rem;
    align-items: flex-start;
    font-size: 1.125rem;
  }
  .text_box ul li:last-child{
    margin: .625rem 0 0;
  }
  .link_box{
    display: flex;
    gap: .3125rem;
    margin: .9375rem 0 0;
  }
  .link_box a{
    font-size: .875rem;
  }
  .link_box a,
  .link_box span{
    color: var(--white);
  }
  .right_box p{
    font-size: .875rem;
  }
`