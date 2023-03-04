import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import SearchBox from './SearchBox.jsx';
import TypeSelector from './TypeSelector.jsx';
import { service } from '../../service/Service.js';
import OptionSelector from './OptionSelector.jsx';
import MethodSelector from './MethodSelector.jsx';
import './IndexMenu.scss';
import RegionSelector from './RegionSelector.jsx';

const IndexMenu = ({ regionId, setRegionId, typeId, setTypeId, optionId, setOptionId, methodId, setMethodId }) => {
  const [typeList, setTypeList] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [methodList, setMethodList] = useState([]);

  // 请求API初始化
  useEffect(() => {
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
    refreshTypeData();
  }, [setTypeId, setOptionId, setMethodId]);

  // 根据typeId更新optionList和methodList
  useEffect(() => {
    const selected = typeList.find(type => type.typeId === typeId);
    if (!selected) return;
    setOptionList(selected.options);
    setOptionId(selected.options[0].optionId);
    setMethodList(selected.rankingMethods);
    setMethodId(selected.rankingMethods[0].methodId);
  }, [typeId, typeList, setOptionId, setMethodId]);

  return (
    <div className="index-menu">
      <Paper
        className="papar-area"
        elevation={2}
        square={true}
      >
        <div className="region-search">
          <RegionSelector
            regionId={regionId}
            setRegionId={setRegionId}
          />
          <SearchBox
            regionId={regionId}
            setRegionId={setRegionId}
          />
        </div>
        <TypeSelector
          className="type-selector"
          typeList={typeList}
          typeId={typeId}
          setTypeId={setTypeId}
          setOptionId={setOptionId}
          setMethodId={setMethodId}
        />
      </Paper>
      <div style={{ height: "100px" }}></div>
      <div className="opt-met-selector">
        <OptionSelector
          optionList={optionList}
          optionId={optionId}
          setOptionId={setOptionId}
        />
        <MethodSelector
          methodList={methodList}
          methodId={methodId}
          setMethodId={setMethodId}
        />
      </div>
    </div>
  );
}

export default IndexMenu;