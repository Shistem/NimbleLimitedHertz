import React from 'react';
import { PerformanceContainer, PerformanceItem } from './styles';
import { Typography } from '../UI/Typography';

function PerformanceInfo({ tokenGenerationRate, totalTime, firstTokenTime }) {
  return (
    <PerformanceContainer>
      <PerformanceItem>
        <Typography variant="body1">Token Generation Rate:</Typography>
        <Typography variant="body1">{tokenGenerationRate.toFixed(2)} tokens/sec</Typography>
      </PerformanceItem>
      <PerformanceItem>
        <Typography variant="body1">Total Time:</Typography>
        <Typography variant="body1">{totalTime.toFixed(2)} seconds</Typography>
      </PerformanceItem>
      <PerformanceItem>
        <Typography variant="body1">First Token Time:</Typography>
        <Typography variant="body1">{firstTokenTime.toFixed(2)} seconds</Typography>
      </PerformanceItem>
    </PerformanceContainer>
  );
}

export default PerformanceInfo;