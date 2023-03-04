import React, { useEffect, useState } from 'react';
import ShopList from '../components/ShopList';
import IndexMenu from '../components/IndexMenu/IndexMenu';
import { service } from '../service/Service';

const ListPage = () => {
  const [regionId, setRegionId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [optionId, setOptionId] = useState("");
  const [methodId, setMethodId] = useState("");
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    if (!regionId || !typeId || !optionId || !methodId) return;
    const refreshShopData = async () => {
      await service.list.board(regionId, typeId, optionId, methodId)
        .then(res => {
          setShopData(res.data.shops);
        })
        .catch(err => {
          console.log("/list/board: " + err);
        });
    };
    refreshShopData();
  }, [regionId, typeId, optionId, methodId]);

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
        shopData={shopData}
      />
    </div>
  );
}

export default ListPage;