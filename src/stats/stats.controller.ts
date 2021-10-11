import { Controller, Get } from '@nestjs/common';
import { TripService } from 'src/trip/trip.service';
import { StatsService } from './stats.service';
import { WeeklyStatsResponseInterface } from './types/WeeklyStatsResponse.interface';
import { AverageDayStatsInterface } from './types/AverageDayStats.interface';
import { groupBy } from 'src/helpers/gropuBy';
import { getSimpleDate } from 'src/helpers/getSimpleDate';

@Controller('stats')
export class StatsController {
  constructor(
    private readonly tripService: TripService,
    private readonly statsService: StatsService,
  ) {}

  @Get('/weekly')
  async getWeeklyStats(): Promise<WeeklyStatsResponseInterface> {
    const range = this.statsService.getWeeklyRange();
    const trips = await this.tripService.findAllInDateRange(
      range.begining,
      range.ending,
    );

    let totalDistance = 0;
    let totalPrice = 0;

    trips.forEach((trip) => {
      totalDistance += trip.distance;
      totalPrice += trip.price;
    });

    return {
      total_distance: `${totalDistance.toFixed(2)} KM`,
      total_price: `${totalPrice.toFixed(2)} PLN`,
    };
  }

  @Get('/monthly')
  async getMonthlyStats(): Promise<AverageDayStatsInterface[]> {
    const range = this.statsService.getMonthlyRange();
    const trips = await this.tripService.findAllInDateRange(
      range.begining,
      range.ending,
    );

    const grouped = groupBy(trips, 'date');

    const stats: AverageDayStatsInterface[] = [];

    Object.keys(grouped).forEach((key) => {
      let totalDistance = 0;
      let avgRide = 0;
      let avgPrice = 0;

      grouped[key].forEach((trip, index, arr) => {
        console.log(trip);
        totalDistance += trip.distance;
        avgRide += trip.distance / arr.length;
        avgPrice += trip.price / arr.length;
      });

      stats.push({
        day: getSimpleDate(key),
        total_distance: totalDistance.toFixed(2) + 'KM',
        avg_ride: avgRide.toFixed(2) + 'KM',
        avg_price: avgPrice.toFixed(2) + 'PLN',
      });
    });

    return stats;
  }
}
