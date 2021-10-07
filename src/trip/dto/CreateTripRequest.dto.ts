import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTripRequestDto {
  @IsNotEmpty()
  @IsString()
  start_address: string;

  @IsNotEmpty()
  @IsString()
  destination_address: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
