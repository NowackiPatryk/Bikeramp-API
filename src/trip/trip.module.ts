import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripController } from './trip.controller';
import { Trip } from './trip.entity';
import { TripService } from './trip.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Trip,
    ]),
  ],
  controllers: [TripController],
  providers: [TripService],
})
export class TripModule {}
