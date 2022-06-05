import * as React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../interfaces/country.interface';
import { parseCountryManyDataForATypeOfInfo } from '../../utils/parsers';

export interface ICountryCardProps {
    country: Country;
}

export default function CountryCard({ country }: ICountryCardProps) {
  return (
    <Link to={`/country/${country.name}`} className="country-card">
      <div className="country-card__image">
        <img src={country.flag} alt={country.name} />
      </div>

      <div className="country-card__info">
        <h3>{country.name}</h3>
        <ul>
          <li>
            <span>Population: </span>
            {country.population}
          </li>
          <li>
            <span>Region: </span>
            {country.region}
          </li>
          {country.capitals
            && (
            <li>
              <span>Capital: </span>
              {parseCountryManyDataForATypeOfInfo(country.capitals)}
            </li>
            )}
        </ul>
      </div>
    </Link>
  );
}
