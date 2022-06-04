/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import CountryContext from '../../contexts/CountryContext';
import CountryCard from './CountryCard';
import { filterCountriesWithSearchInfos, filterCountriesByRegion } from '../../utils/filters';
import { Country } from '../../interfaces/country.interface';

export interface ICountryGrid {
  countryOptions: {
    searchCountry: string,
    filterCountryByContinent: string,
  },
  error: string
}

export default function CountryGrid({ countryOptions, error }: ICountryGrid) {
  const { countries } = useContext(CountryContext);
  const [filteredCountries, setFilteredCountries] = useState([] as Country[]);

  useEffect(() => {
    if (countryOptions.searchCountry !== '' && countryOptions.filterCountryByContinent !== '') {
      const searchFilteredCountries = filterCountriesWithSearchInfos(countryOptions.searchCountry, countries);
      setFilteredCountries(
        filterCountriesByRegion(countryOptions.filterCountryByContinent, searchFilteredCountries),
      );
    } else if (countryOptions.searchCountry !== '') {
      setFilteredCountries(filterCountriesWithSearchInfos(countryOptions.searchCountry, countries));
    } else if (countryOptions.filterCountryByContinent !== '') {
      setFilteredCountries(filterCountriesByRegion(countryOptions.filterCountryByContinent, countries));
    } else {
      setFilteredCountries(countries);
    }
  }, [countries, countryOptions.searchCountry, countryOptions.filterCountryByContinent]);

  return (
    <section className="countries">
      {!error && countries.length === 0 && <p>En attente du serveur...</p>}
      {error && <p className="error">{error}</p>}
      {filteredCountries.length > 0
        && filteredCountries.map((country) => <CountryCard key={country.name} country={country} />)}
      {filteredCountries.length === 0 && countries.length !== 0
        && <p className="error">No Country matches your criteria...</p>}
    </section>
  );
}
