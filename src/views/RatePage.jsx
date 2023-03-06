import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import RateMenu from '../components/RateMenu';
import ShopList from '../components/ShopList';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { service } from '../service/Service';

const RatePage = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      querySearch(search, true);
    } else {
      setResult([]);
    }
  // eslint-disable-next-line
  }, [search]);

  const querySearch = (_keyword, clear) => {
    service.list.search(_keyword, page)
      .then(res => {
        if (clear) {
          setResult(res.data.items);
        } else {
          setResult(result.concat(res.data.items));
          setPage(page + 1);
        }
      })
      .catch(err => {
        console.log("/list/search: " + err);
      });
  };

  return (
    <React.Fragment>
      <RateMenu
        search={search}
        setSearch={setSearch}
      />
      <div style={{ height: "40px" }}></div>
      <ShopList
        shopData={result}
      />
      {search === "" ? (
        <Typography
          variant="body1"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          在上方搜索商家进行评分
        </Typography>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ width: "60%" }}>
            <Button
              variant="contained"
              sx={{ width: "48%", marginRight: "4%" }}
              onClick={() => querySearch(search, false)}
            >
              加载更多
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ width: "48%" }}
              onClick={() => navigate("/create")}
            >
              新建商家
            </Button>
          </div>
        </div>
      )}
      <div style={{ height: "40px" }}></div>
    </React.Fragment>
  );
}

export default RatePage;