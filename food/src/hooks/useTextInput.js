import { useState } from 'react';

export const useTextInput = (defaultValue, fetchResource) => {
  const [inputValue, setInputValue] = useState(defaultValue || '');

  return {
    // error: inputValue === '' ? 'Please enter a name' : null,

    // Contains objects that can be spread onto <input> elements
    inputProps: {
      value: inputValue,
      onChangeText: newValue => setInputValue(newValue),
      onEndEditing: () => fetchResource(inputValue),
    },
  };
};
