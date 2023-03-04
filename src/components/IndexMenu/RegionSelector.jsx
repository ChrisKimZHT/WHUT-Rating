import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { service } from '../../service/Service';
import "./RegionSelector.scss";

const RegionSelector = ({ regionId, setRegionId }) => {
  const [regionList, setRegionList] = useState([]);
  const [regionOpenStat, setRegionOpenStat] = useState(false);
  const [selectRegion, setSelectRegion] = useState(regionId);
  useEffect(() => { refreshRegionData() }, []);

  const refreshRegionData = async () => {
    await service.list.regions()
      .then(res => {
        const regions = res.data.regions;
        setRegionList(regions);
        setRegionId(regions[0].regionId);
      })
      .catch(err => {
        console.log("/list/regions: " + err);
      });
  }

  const handleRegionOpen = () => {
    setRegionOpenStat(true);
  }

  const handleRegionClose = () => {
    setSelectRegion(regionId);
    setRegionOpenStat(false);
  }

  const handleSelectRegion = (event, value) => {
    setSelectRegion(value);
  }

  const handleConfirmRegion = () => {
    setRegionId(selectRegion);
    setRegionOpenStat(false);
  }

  return (
    <div className="region-selector">
      <Button
        className="position-btn"
        onClick={handleRegionOpen}
      >
        <PinDropIcon />
        <div className="region-name">
          {regionList.filter(region => region.regionId === regionId)[0]?.name}
        </div>
      </Button >
      <Dialog
        open={regionOpenStat}
        onClose={handleRegionClose}
        fullWidth={true}
      >
        <DialogTitle>选择校区</DialogTitle>
        <DialogContent sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <List>
            {regionList.map((region, index) => {
              return (
                <ListItemButton
                  key={index}
                  sx={{ paddingLeft: "24px", paddingRight: "24px" }}
                  selected={region.regionId === selectRegion}
                  onClick={(event) => handleSelectRegion(event, region.regionId)}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <PinDropIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={region.name} secondary={region.regionId} />
                </ListItemButton>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegionClose}>取消</Button>
          <Button onClick={handleConfirmRegion}>确定</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RegionSelector;