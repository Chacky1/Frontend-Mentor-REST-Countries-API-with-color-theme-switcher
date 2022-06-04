import React from 'react';
import { BsSearch } from 'react-icons/bs';

export interface ISearchBarProps {
  countryOptionsDispatch: Function
}

export default function SearchBar({ countryOptionsDispatch }: ISearchBarProps) {
  const handleSearchCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    countryOptionsDispatch({ type: 'changeSearchCountry', payload: event.target.value });
  };

  return (
    <div className="search-bar">
      <BsSearch />
      <input type="text" placeholder="Search for a country..." onChange={(event) => handleSearchCountryChange(event)} />
    </div>
  );
}
