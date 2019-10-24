import { useState } from 'react';

export default (initial) => {
  const [value, setValue] = useState(initial);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};
