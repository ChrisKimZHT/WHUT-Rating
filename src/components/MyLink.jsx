import { React, forwardRef } from 'react';
import { Link } from 'react-router-dom';

const MyLink = ({ href, children, ...other }, ref) => {
  return (
    <Link to={href} ref={ref} {...other}>{children}</Link>
  );
}

export default forwardRef(MyLink);