import styled from '@emotion/styled';

import { STATUSES } from '../../constants';

export const CardWrapper = styled.article`
  height: 200px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  width: 576px;
`;

export const CardImage = styled.img`
  background-color: gray;
  height: 200px;
  object-fit: cover;
  width: 200px;
`;

export const CardStatusInfo = styled.div`
  color: rgb(158, 158, 158);
  display: flex;
  align-items: center;
`;

export const CardStatusIndicator = styled.i`
  background-color: ${(props) => STATUSES[props.status]};
  border-radius: 50%;
  height: 0.5rem;
  margin-right: 0.375rem;
  width: 0.5rem;
`;

export const CardMiniInfo = styled.div`
  margin-top: 1rem;
`;

export const CardInfo = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  & h1 {
    font-size: 1.5rem;
  }
  & p {
    font-size: 1.25rem;
  }
  & span {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(158, 158, 158);
  }
`;
