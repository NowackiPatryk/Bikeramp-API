import { HttpModule, Module } from '@nestjs/common';
import { LocationService } from './location.service';

@Module({
  imports: [HttpModule],
  providers: [LocationService],
  exports: [LocationService],
})
export class LocationModule {}
