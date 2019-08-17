import { useState } from 'react';

export const useTextInput = defaultValue => {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  return {
    error: inputValue === '' ? 'Please enter a name' : undefined,

    // Contains objects that can be spread onto <input> elements
    inputProps: {
      value: inputValue,
      onChangeText: newValue => setInputValue(newValue),
      onEndEditing: () => console.log('Term was submitted'),
    },
  };
};
