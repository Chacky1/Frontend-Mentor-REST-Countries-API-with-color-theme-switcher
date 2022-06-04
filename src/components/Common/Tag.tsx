import * as React from 'react';

export interface ITagProps {
    text: string
}

export default function Tag({ text }: ITagProps) {
  return (
    <p className="tag">
      {text}
    </p>
  );
}
