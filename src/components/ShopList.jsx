import React from 'react';

const ShopList = ({ typeId, optionId, methodId }) => {
  return (
    <div>
      {typeId + " - " + optionId + " - " + methodId}
    </div>
  );
}

export default ShopList;