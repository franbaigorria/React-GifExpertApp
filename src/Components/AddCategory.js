import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [InputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (InputValue.trim().length > 2) {
      setCategories((cats) => [InputValue, ...cats]);
    }
  };
  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={InputValue} onChange={handleInput}></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
