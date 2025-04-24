
export const prices = {
  weekday: {
    adult: 5000,
    child: 5000,
  },
  saturday: {
    adult: 7500,
    child: 5000,
  },
  sunday: {
    adult: 10000,
    child: 5000,
  }
};

export const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

export const isSaturday = (date: Date) => date.getDay() === 6;
export const isSunday = (date: Date) => date.getDay() === 0;

export const calculatePrice = (
  date: Date | undefined, 
  adultCount: number, 
  childCount: number
): number => {
  if (!date) return 0;
  
  let priceCategory;
  if (isSunday(date)) {
    priceCategory = "sunday";
  } else if (isSaturday(date)) {
    priceCategory = "saturday";
  } else {
    priceCategory = "weekday";
  }
  
  const adultPrice = prices[priceCategory].adult * adultCount;
  const childPrice = prices[priceCategory].child * childCount;
  
  return adultPrice + childPrice;
};
