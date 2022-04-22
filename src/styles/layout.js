import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const HeaderWrapper = styled.section`
  background-color: #fff;
  height: 120px;
  position: fixed;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 120px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  & img {
    height: 120px;
  }
`;

export const LogoLink = styled(Link)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 126px;
  justify-content: center;
  position: relative;
  width: 133px;
`;

export const MainWrapper = styled.main`
  background-color: rgb(36, 40, 47);
  min-height: 80vh;
  padding: 8.25rem 0 2.5rem;
  width: 100%;
`;

export const MainContainer = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const CharacterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CharacterInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & img {
    border-radius: 0.5rem;
    height: 300px;
    width: 300px;
  }
`;

export const LoadingWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 500px;
`;
