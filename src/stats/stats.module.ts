import { Module } from '@nestjs/common';
import { TripModule } from 'src/trip/trip.module';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [TripModule],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
