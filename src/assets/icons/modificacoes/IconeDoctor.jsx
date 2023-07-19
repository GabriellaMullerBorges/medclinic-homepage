import React from 'react';
import { FaUserDoctor } from 'react-icons/fa6';

function IconeDoctor({ isActive }) {
  const color = isActive ? '#56A890' : 'white';

  return <FaUserDoctor color={color} size={18} />;
}

export default IconeDoctor;
