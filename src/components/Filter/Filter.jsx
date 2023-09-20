import React from 'react';

import { Div, Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => {
    const normalizedValue = e.target.value.toLowerCase();
    dispatch(changeFilter(normalizedValue));
  };
  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Div>
  );
}

export default Filter;
