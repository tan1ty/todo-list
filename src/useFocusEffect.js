import { useState, useRef, useEffect } from 'react';

function useFocusEffect({ isFocused, initialValue }) {
  const inputRef = useRef(null);
  const [value, onChange] = useState(initialValue);
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  useEffect(() => {
    if (isFocused && inputRef.current && inputRef.current.focus) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return { value, inputRef, handleChange };
}

export default useFocusEffect;
