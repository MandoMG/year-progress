import React, { useEffect, useMemo, useState } from 'react';

const today = new Date();

const useTimeCalculator = () => {
  const [currentMonthProgress, setCurrentMonthProgress] = useState<number>();
  const [currentWorkdayProgress, setCurrentWorkdayProgress] = useState<number>();
  const [currentYearProgress, setCurrentYearProgress] = useState<number>();

  const calculateCurrentYearProgress = () => {
    const start = new Date(today.getFullYear(), 0, 1);
    const end = new Date(today.getFullYear() + 1, 0, 0);
    const yearProgress = ((today.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;

    console.log('Year Progress: ', Math.floor(yearProgress));
    setCurrentYearProgress(Math.floor(yearProgress));
  };

  const calculateCurrentMonthProgress = () => {
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const monthProgress = ((today.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;

    console.log('Month Progress: ', Math.floor(monthProgress));
    setCurrentMonthProgress(Math.floor(monthProgress));
  };

  const calculateCurrentWorkdayProgress = () => {
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7, 0, 0);
    const end = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 0, 0);
    const workdayProgress = ((today.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;

    console.log('Workday Progress: ', Math.floor(workdayProgress));
    setCurrentWorkdayProgress(workdayProgress >= 100 ? 100 : Math.floor(workdayProgress));
  };

  const calculateTimeProgress = () => {
    calculateCurrentMonthProgress();
    calculateCurrentYearProgress();
    calculateCurrentWorkdayProgress();
  }

  useEffect(() => {
    const date = new Date();

    calculateTimeProgress();
    setInterval(() => {
      calculateTimeProgress();
    }, 60000)
  }, []);

  return {
    currentMonthProgress,
    currentWorkdayProgress,
    currentYearProgress
  }
};

export default useTimeCalculator;