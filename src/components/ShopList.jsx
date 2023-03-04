import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import "./ShopList.scss";

const ShopList = ({ shopData }) => {
  const fomatTags = (tags) => {
    let tagString = "";
    tags.forEach((tag, index) => {
      if (index === 0) {
        tagString = tagString + tag;
      } else {
        tagString = tagString + ", " + tag;
      }
    });
    return tagString;
  }

  return (
    <div className="shop-list">
      <List>
        {shopData.map((shop, index) => {
          return (
            <ListItemButton
              key={index}
              sx={{ padding: "8px 8px" }}
            // onClick={}
            >
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  src={shop.image}
                  sx={{ width: 50, height: 50 }}
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                className="list-item-text"
                primary={shop.name}
                secondary={fomatTags(shop.tags)}
              />
              <Rating
                name="simple-controlled"
                precision={0.5}
                value={shop.rating}
              />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
}

export default ShopList;