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

export const parsePopulation = (population: number): string => {
  const eachDigitOfPopulation = `${population}`.split('');
  const numberOfDigitsInPopulation = eachDigitOfPopulation.length;
  let result = '';
  for (let i = 0; i < numberOfDigitsInPopulation; i += 1) {
    if (i !== 0 && i % 3 === 0) {
      result += `,${eachDigitOfPopulation[i]}`;
    } else {
      result += eachDigitOfPopulation[i];
    }
  }
  return result;
};
