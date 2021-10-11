import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripModule } from './trip/trip.module';
import { LocationModule } from './location/location.module';
import { StatsModule } from './stats/stats.module';
import Config from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...Config.database,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TripModule,
    LocationModule,
    StatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
