import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LocationNotFoundException } from 'src/location/exceptions/LocationNotFound.exception';
import { LocationService } from 'src/location/location.service';
import { CreateTripDto } from './dto/CreateTrip.dto';
import { CreateTripRequestDto } from './dto/CreateTripRequest.dto';
import { TripService } from './trip.service';

@Controller('trip')
export class TripController {
  constructor(
    private readonly tripService: TripService,
    private readonly locationService: LocationService,
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
    const { start_address, destination_address } = payload;

    try {
      const startAddressDetails = await this.locationService.getLocationData(start_address);
      const destinationAddressDetails = await this.locationService.getLocationData(destination_address);

      if (!startAddressDetails || !destinationAddressDetails) {
        throw new LocationNotFoundException('Wrong location string');
      }

      const distance = this.locationService.calculateDistanceBetweenTwoPoints(
        {
          lat: startAddressDetails.lat,
          lon: startAddressDetails.lon,
        },
        {
          lat: destinationAddressDetails.lat,
          lon: destinationAddressDetails.lon,
        },
      );

      const tripData: CreateTripDto = {
        ...payload,
        distance,
      };

      return this.tripService.create(tripData);
    } catch (err) {
      throw err;
    }
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.tripService.deleteOneById(id);
  }
}
