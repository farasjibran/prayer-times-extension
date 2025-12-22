import { Coordinates } from '../types';
import { LocationService } from '../services/location.service';

/**
 * Get coordinates for a city and country combination
 * @param city City name
 * @param country Country code (ISO 3166-1 alpha-2)
 * @returns Coordinates object with latitude and longitude, or Cairo as fallback
 */
export async function getCoordinates(city: string, country: string): Promise<Coordinates> {
  return await LocationService.getCoordinates(city, country);
}

