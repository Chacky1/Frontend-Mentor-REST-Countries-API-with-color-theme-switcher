import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/Common/BackButton';
import CountryInfos from '../components/CountryDetails/CountryInfos';
import CountryContext from '../contexts/CountryContext';
import { Country } from '../interfaces/country.interface';

export default function CountryDetails() {
  const { countries } = useContext(CountryContext);
  const { countryName } = useParams();

  const [currentCountry, setCurrentCountry] = useState({} as Country);

  useEffect(() => {
    const countryMatchingUrl = countries.find((country) => country.name === countryName);
    if (countryMatchingUrl) {
      setCurrentCountry(countryMatchingUrl);
    }
  }, [countryName]);

  return (
    <section className="country">
      <BackButton text="back" />
      <div className="country__flag">
        <img src={currentCountry.flag} alt={currentCountry.name} />
      </div>
      <CountryInfos country={currentCountry} />
    </section>
  );
}
