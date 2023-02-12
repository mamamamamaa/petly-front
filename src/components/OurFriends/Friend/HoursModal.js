import React from 'react';

import { WorkingModal, Day, DayOfWeek } from '../Friend/Friend.styled';

const daysOfWeek = {
  0: 'MN',
  1: 'TU',
  2: 'WE',
  3: 'TH',
  4: 'FR',
  5: 'SA',
  6: 'SU',
};

const HoursModal = ({ timeTable }) => {
  if (!timeTable || timeTable.length === 0) {
    return;
  }

  return (
    <WorkingModal>
      <ul>
        {timeTable.map((day, idx) => {
          return (
            <Day key={idx}>
              <DayOfWeek>{daysOfWeek[idx]}</DayOfWeek>
              <span>
                {day.from} - {day.to}
              </span>
            </Day>
          );
        })}
      </ul>
    </WorkingModal>
  );
};

export default HoursModal;
