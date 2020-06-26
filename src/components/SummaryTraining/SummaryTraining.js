import React from 'react';
import styled from 'styled-components';


const StyledTotalTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledExercises = styled.p`
  color: ${({ theme }) => theme.fontColorLight};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledReps = styled.p`
  color: ${({ theme }) => theme.colorExtraPrimary};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledExercisesRest = styled.p`
  color: ${({ theme }) => theme.fontColorGray};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledRepsRest = styled.p`
  color: ${({ theme }) => theme.fontColorGray};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const SummaryTraining = () => (
  <>
    <StyledTotalTime>Total time: 100 minutes</StyledTotalTime>
    <StyledReps>Reps: 3x</StyledReps>
    <StyledExercises>Exercises: 6x</StyledExercises>
    <StyledExercisesRest>Exercise rest: 45 seconds</StyledExercisesRest>
    <StyledRepsRest>Reps rest: 2 minutes</StyledRepsRest>
  </>
)

export default SummaryTraining;