import React, { FC } from 'react';
import styled from 'styled-components';
import { Checkpoint } from '../../types/Checkpoint';

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  color: #667085;
  border: 1px solid #F6F4FF;
  min-width: 300px;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
  gap: 20px;
`;

export const CheckpointPreview: FC<{ checkpoint: Checkpoint }> = ({ checkpoint }) => (
  <Container>
    <StyledContent>
      <div>Status:</div>
      <div>{checkpoint.statusText}</div>
    </StyledContent>
    <StyledContent>
      <div>Location:</div>
      <div>{checkpoint.location}</div>
    </StyledContent>
    <StyledContent>
      <div>Details:</div>
      <div>{checkpoint.statusDetails}</div>
    </StyledContent>
    <StyledContent>
      <div>Date:</div>
      <div>{checkpoint.timestamp}</div>
    </StyledContent>
  </Container>
);
