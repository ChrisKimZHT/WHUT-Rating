import React, { useEffect, useState } from 'react';
import ShopList from '../components/ShopList';
import IndexMenu from '../components/IndexMenu/IndexMenu';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { service } from '../service/Service';
import { display } from '@mui/system';

const ListPage = () => {
  const [regionId, setRegionId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [optionId, setOptionId] = useState("");
  const [methodId, setMethodId] = useState("");
  const [shopData, setShopData] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [scroll, setScroll] = useState(0);

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

  useEffect(() => {
    setCurPage(0);
    window.scrollTo(0, 0);
  }, [typeId]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setScroll(scrollTop);
      if (Math.abs(scrollTop + clientHeight - scrollHeight) <= 1) {
        service.list.board(regionId, typeId, optionId, methodId, curPage + 1)
          .then(res => {
            if (res.data.shops.length === 0) return;
            setShopData(shopData.concat(res.data.shops));
            setCurPage(curPage + 1);
          })
          .catch(err => {
            console.log("/list/board: " + err);
          });
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [regionId, typeId, optionId, methodId, shopData, curPage]);

  const toTop = () => {
    window.scrollTo(0, 0);
  }

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
      <Fab
        color="primary"
        style={{
          position: 'fixed',
          bottom: '70px',
          right: '10px',
          opacity: scroll > 100 ? 1 : 0,
          transition: "opacity 225ms",
        }}
        onClick={toTop}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  );
}

export default ListPage;