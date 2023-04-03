import React from 'react';
import styled, { css } from 'styled-components';
import { WorkingModal, Day, DayOfWeek } from './Friend.styled';
import { theme } from '../../../utils';

const daysOfWeek = {
  0: 'MN',
  1: 'TU',
  2: 'WE',
  3: 'TH',
  4: 'FR',
  5: 'SA',
  6: 'SU',
};

const StyledDay = styled(Day)`
  background-color: white;
  color: black;

  ${({ isCurrentDay }) =>
    isCurrentDay &&
    css`
      background-color: transparent;
      color: ${theme.colors.primary};
    `}
`;

const HoursModal = ({ timeTable }) => {
  if (!timeTable || timeTable.length === 0) {
    return null;
  }

  return (
    <WorkingModal>
      <ul>
        {timeTable.map((day, idx) => {
          const isCurrentDay = new Date().getDay() === idx + 1;
          return (
            <StyledDay key={idx} isCurrentDay={isCurrentDay}>
              <DayOfWeek>{daysOfWeek[idx]}</DayOfWeek>
              <span>
                {day.from} - {day.to}
              </span>
            </StyledDay>
          );
        })}
      </ul>
    </WorkingModal>
  );
};

export default HoursModal;
