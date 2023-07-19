import React from 'react';
import { FaUserNurse } from 'react-icons/fa6';

function IconeNurse({ isActive }) {
  const color = isActive ? '#56A890' : 'white';

  return <FaUserNurse color={color} size={18} />;
}

export default IconeNurse;
