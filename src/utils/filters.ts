/* eslint-disable max-len */
import { Country } from '../interfaces/country.interface';

export const filterCountriesWithSearchInfos = (searchInfos: string, countries: Country[]) => countries.filter((country) => country.name.includes(searchInfos));

export const filterCountriesByRegion = (region: string, countries: Country[]) => countries.filter((country) => country.region === region);
