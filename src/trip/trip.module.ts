import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from 'src/location/location.module';
import { TripController } from './trip.controller';
import { Trip } from './trip.entity';
import { TripService } from './trip.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Trip,
    ]),
    LocationModule,
  ],
  controllers: [TripController],
  providers: [TripService],
})
export class TripModule {}
