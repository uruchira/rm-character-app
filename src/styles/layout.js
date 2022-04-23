import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { STATUSES } from '../constants';

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
  padding: 8.25rem 0 3rem;
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
  & a {
    margin: 0.75rem;
  }
`;

export const CharacterInfo = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 0;
  & img {
    border-radius: 0.5rem;
    height: 300px;
    margin-bottom: 1rem;
    width: 300px;
  }
`;

export const CharacterInfoHeader = styled.h1`
  margin: 1rem 0;
  font-size: 2rem;
`;

export const CharacterInfoIdSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 300px;
  & i {
    color: rgb(158, 158, 158);
    font-style: normal;
  }
`;

export const CharacterInfoStatus = styled.span`
  background-color: ${(props) => STATUSES[props.status]};
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.75rem;
  padding: 3px 10px;
  text-transform: capitalize;
`;

export const CharacterInfoBody = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  margin: 1rem 0;
  width: 300px;
  text-align: justify;
`;

export const LoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 70vh;
`;

export const NoPageWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 70vh;
  & p {
    text-align: center;
    & span {
      font-size: 8rem;
      display: block;
    }
    & i {
      font-style: normal;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }
`;
