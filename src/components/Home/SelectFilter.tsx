import * as React from 'react';

export interface ISelectFilterProps {
  countryOptionsDispatch: Function
}

export default function SelectFilter({ countryOptionsDispatch }: ISelectFilterProps) {
  const handleFilterByContinentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    countryOptionsDispatch({ type: 'changeFilterCountryByContinent', payload: event.target.value });
  };

  return (
    <select className="select-filter" onChange={(event) => handleFilterByContinentChange(event)}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
