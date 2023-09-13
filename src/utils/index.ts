import {
  addDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  getHours,
} from "date-fns";

export function getGreeting() {
  const currentHour = getHours(new Date());

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

export const generateCalendarData = (currentMonth: Date) => {
  const startDate = startOfMonth(currentMonth);
  const endDate = endOfMonth(currentMonth);
  const startDateOfWeek = startOfWeek(startDate);
  const endDateOfWeek = endOfWeek(endDate);

  const rows: Date[][] = [];

  let currentDate = startDateOfWeek;

  while (currentDate <= endDateOfWeek) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }
    rows.push(week);
  }
  return rows;
};
