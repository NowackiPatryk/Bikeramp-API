import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTripDto } from './dto/CreateTrip.dto';
import { Trip } from './trip.entity';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,
  ) {}

  async findAll(): Promise<Trip[]> {
    return this.tripRepository.find();
  }

  async findOneById(id: number): Promise<Trip> {
    return this.tripRepository.findOne(id);
  }

  async create(payload: CreateTripDto): Promise<void> {
    this.tripRepository.save(payload);
  }

  async deleteOneById(id: number): Promise<void> {
    await this.tripRepository.delete(id);
  }
}
