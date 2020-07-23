import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../mediaQueries/mediaQueries';
import UserPanelTemplate from '../templates/UserPanelTemplate';
import GridTemplate from '../templates/GridTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { getDoneTrainings } from '../actions/progress';
import Moment from 'react-moment';

const StyledWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  animation: slideIn 0.3s ease-in-out;

  @media ${device.mobileL} {
    width: 80%;
  }
`;

const StyledGridTemplate = styled(GridTemplate)`
  grid-auto-rows: auto;
  grid-template-columns: 100%;

  @media ${device.mobileL} {
    grid-template-columns: 100%;
  }

  @media ${device.tablet} {
    grid-auto-rows: auto;
    grid-template-columns: 90%;
  }

  @media ${device.laptopL} {
    grid-template-columns: 40% 40%;
    grid-gap: 2rem;
  }
`;

const StyledProgressWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;

  @media ${device.tablet} {
    border-radius: 30px;
  }

  & > * {
    flex-basis: 49%;
  }
`;

const StyledDate = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};

  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

const StyledHr = styled.hr`
  flex-basis: 2%;
  border: 1px solid ${({ theme }) => theme.colorExtraQuatenary};
`;

const StyledTrainingContainer = styled.div`
  position: relative;
  align-self: stretch;
  overflow: hidden;
  cursor: pointer;
`;

const StyledTraining = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem; 
  color: ${({theme}) => theme.colorExtraSecondary};
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  border-radius: 20px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  text-align: center;
  
  @media ${device.tablet} {
    border-radius:30px;
  }

  @media ${device.laptop} {
    border-radius:30px;
    font-size: ${({ theme }) => theme.fontSize.xxs};    
  }

  @media ${device.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.xxxs}; 
  }

  ${StyledTrainingContainer}:hover & {
    transform: translateY(-100%);
  }
`;

const StyledCheck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorExtraSecondary};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transform: translateY(100%);
  transition: 0.2s ease-in-out;

  ${StyledTrainingContainer}:hover & {
    transform: translateY(0);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.fontColorGray};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  margin-top: 3rem;
`;

const ProgressPage = () => {
  const dispatch = useDispatch();
  const doneTrainings = useSelector((state) => state.progress.doneTrainings);

  useEffect(() => {
    dispatch(getDoneTrainings());
  }, [dispatch]);

  const renderDoneTrainings =
    doneTrainings.length > 0 &&
    doneTrainings.map((training) => (
      <StyledProgressWrapper key={training._id}>
        <StyledDate><Moment format="dddd YYYY-MM-DD" date={training.date} /></StyledDate>
        <StyledHr></StyledHr>
        <StyledTrainingContainer as={StyledLink} to={`/trainings/details/${training._id}`}>
          <StyledTraining>{training.name}</StyledTraining>
          <StyledCheck>Check</StyledCheck>
        </StyledTrainingContainer>
      </StyledProgressWrapper>
    ));

  return (
    <UserPanelTemplate pageTitle='progress'>
      <StyledWrapper>
          {doneTrainings.length > 0 ? (
          <StyledGridTemplate>
            <>{renderDoneTrainings}</>
          </StyledGridTemplate>
          ) : (
            <StyledParagraph>No trainings done</StyledParagraph>
          )}
      </StyledWrapper>
    </UserPanelTemplate>
  );
};
export default ProgressPage;
