import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TypeSelector = ({ typeList, typeId, setTypeId, setOptionId, setMethodId }) => {
  return (
    <Tabs
      value={typeId}
      onChange={(_, typeId) => {
        setTypeId(typeId);
        setOptionId("");
        setMethodId("");
      }}
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