export const getDaysInCurrentMonth = () => {
  const today = new Date();
  const month = today.getMonth();

  return new Date(today.getFullYear(), month + 1, 0).getDate();
};
