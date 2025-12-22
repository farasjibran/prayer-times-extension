/**
 * Lists of cities and countries for VS Code configuration dropdowns
 * Now using data from @countrystatecity/countries package
 */

import { LocationService } from '../services/location.service';

/**
 * Get all countries with their codes and names
 */
export async function getAllCountries() {
  const countries = await LocationService.getAllCountries();
  return countries.map((country: any) => ({
    code: country.iso2,
    name: country.name
  }));
}

/**
 * Get all cities for a specific country
 */
export async function getCitiesForCountry(countryCode: string) {
  const cities = await LocationService.getCitiesOfCountry(countryCode);
  return cities.map((city: any) => city.name);
}

// Legacy exports for backward compatibility
// Note: These are static lists since they're used synchronously in package.json
export const COUNTRIES = [
  { code: 'EG', name: 'Egypt' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'TR', name: 'Turkey' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'PK', name: 'Pakistan' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'FR', name: 'France' },
  { code: 'DE', name: 'Germany' },
  { code: 'IN', name: 'India' },
  { code: 'BD', name: 'Bangladesh' },
  { code: 'MA', name: 'Morocco' },
  { code: 'TN', name: 'Tunisia' },
  { code: 'DZ', name: 'Algeria' },
  { code: 'JO', name: 'Jordan' },
  { code: 'LB', name: 'Lebanon' },
  { code: 'SY', name: 'Syria' },
  { code: 'IQ', name: 'Iraq' },
  { code: 'IR', name: 'Iran' },
  { code: 'QA', name: 'Qatar' },
  { code: 'KW', name: 'Kuwait' },
  { code: 'BH', name: 'Bahrain' },
  { code: 'OM', name: 'Oman' },
  { code: 'YE', name: 'Yemen' }
];

export const COUNTRY_CODES = COUNTRIES.map((c: any) => c.code);

// Export a curated list of major cities for the configuration
// This includes the original cities plus many more
export const CITIES = [
  // Egypt
  'Cairo', 'Alexandria', 'Giza',
  // Saudi Arabia
  'Mecca', 'Medina', 'Riyadh', 'Jeddah',
  // Turkey
  'Istanbul', 'Ankara',
  // Indonesia
  'Jakarta', 'Bandung',
  // Pakistan
  'Karachi', 'Lahore', 'Islamabad',
  // Malaysia
  'Kuala Lumpur',
  // UAE
  'Dubai', 'Abu Dhabi',
  // UK
  'London',
  // USA
  'New York', 'Los Angeles', 'Chicago',
  // Canada
  'Toronto',
  // Australia
  'Sydney', 'Melbourne',
  // France
  'Paris',
  // Germany
  'Berlin',
  // India
  'Mumbai', 'Delhi',
  // Bangladesh
  'Dhaka',
  // Morocco
  'Casablanca', 'Rabat',
  // Tunisia
  'Tunis',
  // Algeria
  'Algiers',
  // Jordan
  'Amman',
  // Lebanon
  'Beirut',
  // Syria
  'Damascus',
  // Iraq
  'Baghdad',
  // Iran
  'Tehran',
  // Qatar
  'Doha',
  // Kuwait
  'Kuwait City',
  // Bahrain
  'Manama',
  // Oman
  'Muscat',
  // Yemen
  'Sanaa'
];

