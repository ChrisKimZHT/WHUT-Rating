import React, { useEffect, useState } from 'react';
import { service } from '../service/Service.js';
import './TypeSelector.scss';

const TypeSelector = ({ typeId, optionId, setTypeId, setOptionId }) => {
  const [typeList, setTypeList] = useState([]);
  const [optionList, setOptionList] = useState([]);

  const refreshTypeData = async () => {
    await service.list.types()
      .then(res => {
        setTypeList(res.data.types);
      })
      .catch(err => {
        console.log("/list/type: " + err);
      });
  }

  useEffect(() => { refreshTypeData() }, []);

  const refreshOptionData = (_typeId) => {
    setOptionList(typeList.filter(type => type.typeId === _typeId)[0].options);
  }

  const onSelectType = (typeId) => {
    setTypeId(typeId);
    refreshOptionData(typeId);
  }

  const onSelectOption = (optionId) => {
    setOptionId(optionId);
  }

  return (
    <React.Fragment>
      <div className="type-selector">
        {
          typeList.length === 0 ?
            <div className="d-flex justify-content-center loading">
              <div className="spinner-border text-secondary align-self-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div> : ""
        }
        {
          typeList.map((type, index) => (
            <div className={`type-element ${typeId === type.typeId ? "active" : ""}`} key={index}
              onClick={() => onSelectType(type.typeId)}>
              {type.name}
            </div>
          ))
        }
      </div>
      <div className="option-selector">
        {
          optionList.map((option, index) => (
            <div className={`option-element ${optionId === option.optionId ? "active" : ""}`} key={index}
              onClick={() => onSelectOption(option.optionId)}>
              {option.name}
            </div>
          ))
        }
      </div>
    </React.Fragment>
  );
}

export default TypeSelector;