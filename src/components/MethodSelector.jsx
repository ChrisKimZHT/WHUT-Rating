import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './MethodSelector.scss';

const MethodSelector = ({ methodList, methodId, setMethodId }) => {
  return (
    <FormControl size="small" className="method-selector">
      <Select
        value={methodId}
        onChange={(event) => { setMethodId(event.target.value); }}
      >
        {methodList?.map((method, index) => {
          return (
            <MenuItem
              key={index}
              value={method.methodId}
            >
              {method.name}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}

export default MethodSelector;