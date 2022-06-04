import React, { useMemo, useState } from 'react';
import { Country } from '../interfaces/country.interface';
import CountryContext, { initialContextValue } from './CountryContext';

export interface ICountryContextWrapperProps {
    children: React.ReactNode
}

export default function CountryContextWrapper({ children }: ICountryContextWrapperProps) {
  const [countries, setCountries] = useState(initialContextValue);

  const changeCountries = (newCountries: Country[]) => {
    setCountries(newCountries);
  };

  const valueForCountryProvider = useMemo(() => ({ countries, changeCountries }), [countries]);

  return (
    <CountryContext.Provider value={valueForCountryProvider}>
      { children }
    </CountryContext.Provider>
  );
}
