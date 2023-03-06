import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';
import './SearchBox.scss';
import { service } from '../service/Service';
import ShopList from './ShopList';

const SearchBox = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(0);

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

  const handleOpen = () => {
    setOpen(true);
    setSearch("");
    setResult([]);
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (e) => {
    querySearch(e.target.value, true); // 实时搜索，性能未知
    setSearch(e.target.value);
  }

  return (
    <div className="search-box">
      <Button
        className="search-btn"
        variant="outlined"
        startIcon={<SearchIcon />}
        onClick={handleOpen}
      >
        搜索
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AppBar>
          <Toolbar sx={{ padding: "0px 8px" }}>
            <IconButton
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Input
              placeholder="搜索"
              value={search}
              onChange={handleInput}
              autoFocus
              fullWidth
              disableUnderline
              sx={{
                flex: 1,
                ml: "5px",
                mr: "5px",
                border: "1px solid #92CAF4",
                borderRadius: "16px",
                padding: "0px 14px",
                backgroundColor: "#B9DDF9",
              }}
            >
            </Input>
            <IconButton
              color="inherit"
              onClick={() => { querySearch(search, true); }}
            >
              <SearchIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ flexShrink: 0, height: "50px" }}></div>
        <ShopList
          shopData={result}
          handleClick={handleClose}
        />
        {result.length !== 0 ? (
          <Button
            variant="contained"
            sx={{ margin: "0 25% 10px 25%" }}
            onClick={() => { querySearch(search, false); }}
          >
            加载更多
          </Button>
        ) : ""}
      </Dialog>
    </div>
  );
}

export default SearchBox;