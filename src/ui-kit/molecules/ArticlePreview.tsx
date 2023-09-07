import React, { FC } from 'react';
import styled from 'styled-components';
import { Article } from '../../types/Article';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #667085;
  border: 1px solid #F6F4FF;
  min-width: 300px;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const StyledImgContent = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;
export const ArticlePreview: FC<{ atricle: Article }> = ({ atricle }) => (
  <Container>
    <StyledContent>
      <div>Product:</div>
      <div>{atricle.productName}</div>
    </StyledContent>
    <StyledContent>
      <div>Number:</div>
      <div>{atricle.articleNo}</div>
    </StyledContent>
    <StyledContent>
      <div>quantity:</div>
      <div>{atricle.quantity}</div>
    </StyledContent>
    <StyledImgContent>
      <img src={atricle.articleImageUrl} alt={atricle.productName} />
    </StyledImgContent>
  </Container>
);
