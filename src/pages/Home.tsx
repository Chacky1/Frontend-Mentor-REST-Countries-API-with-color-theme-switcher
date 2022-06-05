/* eslint-disable max-len */
import axios from 'axios';
import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import CountryGrid from '../components/Home/CountryGrid';
import SearchBar from '../components/Home/SearchBar';
import SelectFilter from '../components/Home/SelectFilter';
import CountryContext from '../contexts/CountryContext';
import { Country } from '../interfaces/country.interface';

interface CountryOptionsState {
  searchCountry: string,
  filterCountryByContinent: string
}

interface CountryOptionsAction {
  type: string,
  payload: string
}

const initialCountryOptions: CountryOptionsState = {
  searchCountry: '',
  filterCountryByContinent: '',
};

const countryOptionsReducer = (
  state: CountryOptionsState,
  action: CountryOptionsAction,
): CountryOptionsState => {
  switch (action.type) {
    case 'changeSearchCountry':
      return { ...state, searchCountry: action.payload };
    case 'changeFilterCountryByContinent':
      return { ...state, filterCountryByContinent: action.payload };
    default:
      return state;
  }
};

export default function Home() {
  const [countryOptions, countryOptionsDispatch] = useReducer(countryOptionsReducer, initialCountryOptions);
  const [error, setError] = useState('');
  const { countries, changeCountries } = useContext(CountryContext);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const newCountries: Country[] = response.data.map((country: any) => ({
          name: country.name.common,
          nativeName: country.name.nativeName ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common : '',
          population: country.population,
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital,
          topLevelDomain: country.tld,
          currencies: country.currencies ? Object.keys(country.currencies).map((currency) => country.currencies[currency].name) : [],
          languages: country.languages ? Object.keys(country.languages).map((language) => country.languages[language]) : [],
          borderCountries: country.borders ? country.borders : [], // references cca3
          cca3: country.cca3,
          flag: country.flags.svg,
        }));
        changeCountries(newCountries);
      } catch (axiosError: any) {
        setError(axiosError.message);
      }
    };
    if (countries.length === 0) {
      fetchCountries();
    }
  }, [countryOptions]);

  return (
    <section className="home">
      <div className="home__header">
        <SearchBar countryOptionsDispatch={countryOptionsDispatch} />
        <SelectFilter countryOptionsDispatch={countryOptionsDispatch} />
      </div>

      <CountryGrid countryOptions={countryOptions} error={error} />
    </section>
  );
}
