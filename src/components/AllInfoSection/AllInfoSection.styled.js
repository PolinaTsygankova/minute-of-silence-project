import styled from 'styled-components';

export const StyledAllInfoSection = styled.section`
  padding: 100px 30px;
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
  /* margin: 0; */
  margin-bottom: 58px;
  color: #ffe;
  font-size: 42px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;
