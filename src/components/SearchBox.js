import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onChange }) => {
  return (
    <input
      className='pa2 ba  bg-lightest-blue b--green lh-copy br2'
      placeholder='Search Robo'
      type='search'
      onChange={onChange}
    />
  );
};
export default SearchBox;
