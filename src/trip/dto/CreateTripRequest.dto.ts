import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateTripRequestDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/[^,]+ /)
  start_address: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/[^,]+ /)
  destination_address: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
