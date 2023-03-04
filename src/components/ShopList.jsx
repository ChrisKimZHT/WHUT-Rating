import React from 'react';

const ShopList = ({ regionId, typeId, optionId, methodId }) => {
  return (
    <div>
      {regionId + " - " + typeId + " - " + optionId + " - " + methodId}
    </div>
  );
}

export default ShopList;