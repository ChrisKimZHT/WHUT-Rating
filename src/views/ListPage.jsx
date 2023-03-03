import React, { useState } from 'react';
import ShopList from '../components/ShopList';
import TypeSelector from '../components/TypeSelector';
import './ListPage.scss';

const ListPage = () => {
  const [typeId, setTypeId] = useState(0);
  const [optionId, setOptionId] = useState(0);

  return (
    <div className="list-page">
      <div className="input-group">
        <input type="text" className="form-control search-input" placeholder="请输入关键字" />
        <div className="input-group-append">
          <button className="btn btn-primary search-btn" type="button">搜索</button>
        </div>
      </div>
      <TypeSelector
        typeId={typeId}
        optionId={optionId}
        setTypeId={setTypeId}
        setOptionId={setOptionId}
      />
      <ShopList
        typeId={typeId}
        optionId={optionId}
      />
    </div>
  );
}

export default ListPage;