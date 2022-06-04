/* eslint-disable max-len */
import { Country } from '../interfaces/country.interface';

export const parseCountryManyDataForATypeOfInfo = (arrayOfData: string[]): string => arrayOfData.map((data, index) => `${data}${index === arrayOfData.length - 1 ? '' : ','}`).join('');

export const parseBorderCountries = (borderCountries: string[], countries: Country[]): string[] => borderCountries.map((borderCountry) => {
  const countryFound = countries.find((country) => country.cca3 === borderCountry);
  if (countryFound) {
    return countryFound.name;
  }

  return '';
});
