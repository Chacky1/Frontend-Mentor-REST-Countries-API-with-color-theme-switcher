/* eslint-disable no-unused-vars */
import { createContext } from 'react';
import { Country } from '../interfaces/country.interface';

export const initialContextValue: Country[] = [] as Country[];

const CountryContext = createContext({
  countries: initialContextValue,
  changeCountries: (newCountries: Country[]) => {},
});

export default CountryContext;
