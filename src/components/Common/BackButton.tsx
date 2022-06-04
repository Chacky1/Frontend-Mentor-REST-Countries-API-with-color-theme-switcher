import * as React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export interface IBackButtonProps {
    text: string
}

export default function BackButton({ text }: IBackButtonProps) {
  return (
    <Link to="/">
      <BiArrowBack />
      {text}
    </Link>
  );
}
