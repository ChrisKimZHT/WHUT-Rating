import React, { useEffect, useState } from 'react';
import { service } from '../service/Service.js';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Selector.scss';

const Selector = ({ typeId, setTypeId, optionId, setOptionId, methodId, setMethodId }) => {
  const [typeList, setTypeList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [methodList, setMethodList] = useState([]);

  const refreshTypeData = async () => {
    await service.list.types()
      .then(res => {
        const types = res.data.types;
        setTypeList(types);
        setTypeId(types[0].typeId);
        setOptionList(types[0].options);
        setOptionId(types[0].options[0].optionId);
        setMethodList(types[0].rankingMethods);
        setMethodId(types[0].rankingMethods[0].methodId);
      })
      .catch(err => {
        console.log("/list/type: " + err);
      });
  }

  useEffect(() => { refreshTypeData() }, []);

  const handleSelectType = (_, typeId) => {
    setTypeId(typeId);
    const selectedType = typeList.filter(type => type.typeId === typeId)[0];
    setOptionList(selectedType.options);
    setOptionId(selectedType.options[0].optionId);
    setMethodList(selectedType.rankingMethods);
    setMethodId(selectedType.rankingMethods[0].methodId);
  }

  const onSelectOption = (event) => {
    setOptionId(event.target.value);
  }

  const onSelectMethod = (event) => {
    setMethodId(event.target.value);
  }

  return (
    <div className="selector">
      <Paper
        className="type-selector"
        elevation={2}
        square={true}>
        <Tabs
          value={typeId}
          onChange={handleSelectType}
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
      </Paper>
      <Box className="option-selector">
        <FormControl size="small" className="select-box-l">
          <Select
            value={optionId}
            onChange={onSelectOption}
          >
            {optionList.map((option, index) => {
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
        <FormControl size="small" className="select-box-r">
          <Select
            value={methodId}
            onChange={onSelectMethod}
          >
            {methodList.map((method, index) => {
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
      </Box>
    </div>
  );
}

export default Selector;