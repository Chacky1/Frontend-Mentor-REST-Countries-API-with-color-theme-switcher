/* eslint-disable max-len */
import React, { useContext } from 'react';
import CountryContext from '../../contexts/CountryContext';
import { Country } from '../../interfaces/country.interface';
import { parseCountryManyDataForATypeOfInfo, parseBorderCountries } from '../../utils/parsers';
import Tag from '../Common/Tag';

export interface ICountryInfosProps {
    country: Country
}

export default function CountryInfos({ country }: ICountryInfosProps) {
  const { countries } = useContext(CountryContext);

  return (
    <div className="country-infos">
      <h2 className="country-infos__title">{country.name}</h2>
      <div className="country-infos__details">
        <ul>
          {country.nativeName
            && (
            <li>
              <span>Native Name: </span>
              {country.nativeName}
            </li>
            )}
          {country.population
          && (
          <li>
            <span>Population: </span>
            {country.population}
          </li>
          )}
          {country.region
          && (
          <li>
            <span>Region: </span>
            {country.region}
          </li>
          )}
          {country.subRegion && (
          <li>
            <span>Sub Region: </span>
            {country.subRegion}
          </li>
          )}
          {country.capitals && country.capitals.length > 0 && (
            <li>
              <span>Capital: </span>
              {parseCountryManyDataForATypeOfInfo(country.capitals)}
            </li>
          )}
          {country.topLevelDomains && country.topLevelDomains.length > 0 && (
          <li>
            <span>Top Level Domain: </span>
            {parseCountryManyDataForATypeOfInfo(country.topLevelDomains)}
          </li>
          )}
          {country.currencies && country.currencies.length > 0 && (
          <li>
            <span>Currencies: </span>
            {parseCountryManyDataForATypeOfInfo(country.currencies)}
          </li>
          )}
          {country.languages && country.languages.length > 0 && (
          <li>
            <span>Languages: </span>
            {parseCountryManyDataForATypeOfInfo(country.languages)}
          </li>
          )}
        </ul>
      </div>
      {country.borderCountries && country.borderCountries.length > 0 && (
      <p>
        <span>Border Countries: </span>
        {parseBorderCountries(country.borderCountries, countries).map((borderCountry) => <Tag text={borderCountry} />)}
      </p>
      )}
    </div>
  );
}
