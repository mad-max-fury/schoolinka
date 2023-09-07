import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";

export  const generateCalendarData = (currentMonth: Date) => {
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