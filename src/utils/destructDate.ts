import dayjs from 'dayjs';
type DateKey = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';

export const destructDate = (date: Date): Record<DateKey, number> => {
  const currentDate = dayjs(date);

  return {
    year: currentDate.get('year'),
    month: currentDate.get('month') + 1,
    date: currentDate.get('date'),
    hour: currentDate.get('hour'),
    minute: currentDate.get('minute'),
    second: currentDate.get('second'),
  };
};
