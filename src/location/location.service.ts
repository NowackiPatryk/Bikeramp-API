import { HttpService, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import Config from 'src/config';
import toRad from 'src/helpers/toRad';
import CoordinatesInterface from './types/coordinates.interface';

@Injectable()
export class LocationService {
  constructor(
    private httpService: HttpService,
  ) {}

  async getLocationData(query: string): Promise<any> {
    const decodedQuery = query.split(','); //  [0] is street, [1] is city, [2] is county
    const params = {
      street: decodedQuery[0],
      city: decodedQuery[1],
      country: decodedQuery[2],
      format: 'json',
    };

    const observable = this.httpService.get(Config.nominatim.baseUrl, {
      params,
    });
    const response = await firstValueFrom(observable);

    return response.data[0];
  }

  calculateDistanceBetweenTwoPoints(
    startPoint: CoordinatesInterface,
    destinationPoint: CoordinatesInterface,
  ): number {
    const R = 6371; // km

    const dLat = toRad(destinationPoint.lat - startPoint.lat);
    const dLon = toRad(destinationPoint.lon - startPoint.lon);
    const lat1 = toRad(startPoint.lat);
    const lat2 = toRad(destinationPoint.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;

    return d;
  }
}
