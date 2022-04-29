import styled from '@emotion/styled';

import { STATUSES } from '../constants';

export const HeaderWrapper = styled.section`
  background-color: #fff;
  border-top: 4px solid rgb(36, 40, 47);
  position: fixed;
  right: 0;
  width: 100%;
  top: 0;
  z-index: 4;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  & a {
    align-items: center;
    color: rgb(36, 40, 47);
    display: flex;
    height: 118px;
    & h1 {
      font-size: 1.875rem;
    }
    & img {
      margin: 0 0.5rem;
    }
  }
`;

export const MainWrapper = styled.main`
  background-color: rgb(36, 40, 47);
  padding: 8.25rem 0 0;
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
  margin: 0.25rem 0 5rem;
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
    margin-bottom: 1rem;
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

export const CenterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 80vh;
  & section {
    text-align: center;
    & span {
      font-size: 8rem;
      display: block;
    }
    & p {
      color: rgb(158, 158, 158);
      font-size: 1.25rem;
      text-transform: capitalize;
    }
    & i {
      color: rgb(158, 158, 158);
      font-size: 0.875rem;
      font-style: normal;
      display: block;
      margin-top: 0.5rem;
    }
  }
`;

export const ErrorWrapper = styled.div`
  align-items: center;
  color: rgb(214, 61, 46);
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
`;
