import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTripDto } from './dto/CreateTrip.dto';
import { CreateTripRequestDto } from './dto/CreateTripRequest.dto';
import { TripService } from './trip.service';

@Controller('trip')
export class TripController {
  constructor(
    private readonly tripService: TripService,
  ) {}

  @Get('/')
  async findAll() {
    return this.tripService.findAll();
  }

  @Get('/:id')
  async findOneById(@Param('id') id: number) {
    return this.tripService.findOneById(id);
  }

  @Post('/')
  async create(@Body() payload: CreateTripRequestDto) {
    const tripData: CreateTripDto = {
      ...payload,
      distance: 12.1, //  for now
    };

    return this.tripService.create(tripData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.tripService.deleteOneById(id);
  }
}
