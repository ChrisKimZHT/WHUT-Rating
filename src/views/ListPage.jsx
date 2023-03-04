import React, { useState } from 'react';
import ShopList from '../components/ShopList';
import IndexMenu from '../components/IndexMenu/IndexMenu';

const ListPage = () => {
  const [regionId, setRegionId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [optionId, setOptionId] = useState("");
  const [methodId, setMethodId] = useState("");

  return (
    <div>
      <IndexMenu
        regionId={regionId}
        setRegionId={setRegionId}
        typeId={typeId}
        setTypeId={setTypeId}
        optionId={optionId}
        setOptionId={setOptionId}
        methodId={methodId}
        setMethodId={setMethodId}
      />
      <ShopList
        regionId={regionId}
        typeId={typeId}
        optionId={optionId}
        methodId={methodId}
      />
    </div>
  );
}

export default ListPage;