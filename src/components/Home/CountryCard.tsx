import * as React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../interfaces/country.interface';
import { parseCountryManyDataForATypeOfInfo, parsePopulation } from '../../utils/parsers';

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
            Population:
            <span>
              {' '}
              {parsePopulation(country.population)}
            </span>
          </li>
          <li>
            Region:
            <span>
              {' '}
              {country.region}
            </span>
          </li>
          {country.capitals
            && (
            <li>
              Capital:
              <span>
                {' '}
                {parseCountryManyDataForATypeOfInfo(country.capitals)}
              </span>
            </li>
            )}
        </ul>
      </div>
    </Link>
  );
}
