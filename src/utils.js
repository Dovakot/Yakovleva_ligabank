import dayjs from 'dayjs';

const COLUMNS_COUNT = 2;
const FIXED_DIGIT_COUNT = 10000;
const MAX_RANGE = 7;

const isCurrentDate = (date, currentDate) => date.getDate() === currentDate.getDate();
const getDate = (date, format) => dayjs(date).format(format);

const getSubDays = () => {
  const date = new Date();

  return date.setDate(date.getDate() - MAX_RANGE);
};

const getConvertibleCurrency = (amount, rateFrom, rateTo) => {
  const convertibleCurrency = amount / rateFrom * rateTo * FIXED_DIGIT_COUNT;

  return Math.ceil(convertibleCurrency) / FIXED_DIGIT_COUNT;
};

const getHistoryColCount = (count) => {
  const colCount = {
    left: 0,
    right: 0,
  };

  if (count > 0) {
    colCount.left = Math.round(count / COLUMNS_COUNT);
    colCount.right = count - colCount.left;
  }

  return colCount;
};

const filterHistory = (data, date, from, to) => data.filter((item) => item.date === date
  && item.from.currency === from.currency
  && item.from.amount === from.amount
  && item.to.currency === to.currency
  && item.to.amount === to.amount);

export {
  isCurrentDate,
  getSubDays,
  getDate,
  getConvertibleCurrency,
  getHistoryColCount,
  filterHistory
};
