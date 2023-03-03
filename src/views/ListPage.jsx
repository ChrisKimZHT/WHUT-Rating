import React, { useState } from 'react';
import ShopList from '../components/ShopList';
import Selector from '../components/Selector';

const ListPage = () => {
  const [typeId, setTypeId] = useState("");
  const [optionId, setOptionId] = useState("");
  const [methodId, setMethodId] = useState("");

  return (
    <div>
      <Selector
        typeId={typeId}
        setTypeId={setTypeId}
        optionId={optionId}
        setOptionId={setOptionId}
        methodId={methodId}
        setMethodId={setMethodId}
      />
      <ShopList
        typeId={typeId}
        optionId={optionId}
        methodId={methodId}
      />
    </div>
  );
}

export default ListPage;