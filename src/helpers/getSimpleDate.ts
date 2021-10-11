//  from <YYYY-MM-DD> to <Month, Day>

const getMonth = (monthNumber: number): string => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dev',
  ];

  return months[monthNumber - 1];
};

const getNumeral = (day: number): string => {
  switch (day) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

export const getSimpleDate = (date: string): string => {
  const splittedDate = date.split('-'); //  [0] - year | [1] - month | [2] - day
  const month = parseInt(splittedDate[1], 10);
  const day = parseInt(splittedDate[2], 10);

  let formatedDate = '';

  formatedDate += `${getMonth(month)}, `;
  formatedDate += `${day}${getNumeral(day)}`;

  return formatedDate;
}
