import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TypeSelector = ({ typeId, setTypeId, typeList }) => {
  return (
    <Tabs
      value={typeId}
      onChange={(_, typeId) => { setTypeId(typeId); }}
      variant="scrollable"
      scrollButtons="auto"
    >
      {typeList.map((type, index) => (
        <Tab
          key={index}
          label={type.name}
          value={type.typeId}
        />
      ))}
    </Tabs>
  );
}

export default TypeSelector;