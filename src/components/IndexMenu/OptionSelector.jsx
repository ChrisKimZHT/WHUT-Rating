import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './OptionSelector.scss';

const OptionSelector = ({ optionList, optionId, setOptionId }) => {
  return (
    <FormControl size="small" className="option-selector">
      <Select
        value={optionId}
        onChange={(event) => { setOptionId(event.target.value); }}
      >
        {optionList?.map((option, index) => {
          return (
            <MenuItem
              key={index}
              value={option.optionId}
            >
              {option.name}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  );
}

export default OptionSelector;