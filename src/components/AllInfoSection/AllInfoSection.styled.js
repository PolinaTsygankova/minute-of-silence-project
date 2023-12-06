import styled from 'styled-components';

export const StyledAllInfoSection = styled.section`
  padding: 100px 50px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://www.fairobserver.com/wp-content/uploads/2022/12/Ukraine-army.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Title = styled.h2`
  margin: 0;
  color: #ffe;
  font-size: 42px;
  margin-bottom: 40px;

  @media screen and (max-width: 1440px) {
    margin-bottom: 12px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
