import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripModule } from './trip/trip.module';
import { LocationModule } from './location/location.module';
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
