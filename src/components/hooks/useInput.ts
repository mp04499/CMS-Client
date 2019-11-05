import { useState } from 'react';

export default (
  initial: string
): [
  string,
  (
    event:
      | React.ChangeEvent<
          HTMLTextAreaElement | HTMLTextAreaElement | HTMLInputElement
        >
      | React.SyntheticEvent<Element, Event>
  ) => void,
  () => void
] => {
  const [value, setValue] = useState(initial);

  const handleChange = (e: React.SyntheticEvent): void => {
    setValue((e.target as HTMLInputElement).value);
  };

  const reset = (): void => {
    setValue('');
  };

  return [value, handleChange, reset];
};
