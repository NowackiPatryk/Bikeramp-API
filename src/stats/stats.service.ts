import { Injectable } from '@nestjs/common';
import { getDaysInCurrentMonth } from 'src/helpers/getDaysInCurrentMonth';
import { DateRangeInterface } from './types/DateRange.interface';

@Injectable()
export class StatsService {
  getWeeklyRange(): DateRangeInterface {
    const date = new Date();
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate() - dayOfWeek;

    return {
      begining: new Date().setDate(dayOfMonth),
      ending: new Date().setDate(dayOfMonth + 7),
    };
  }

  getMonthlyRange(): DateRangeInterface {
    const daysInCurrentMonth = getDaysInCurrentMonth();

    return {
      begining: new Date().setDate(0),
      ending: new Date().setDate(daysInCurrentMonth),
    };
  }
}
