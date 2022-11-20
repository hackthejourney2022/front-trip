import React from 'react';
import Link from 'next/link';

import {
  HOME_PAGE
} from '../../../settings/constant';

const FooterMenu = () => {
  return (
    <ul className="ant-menu">
      <li>
        <Link href={`${HOME_PAGE}`}>
          <a>Home</a>
        </Link>
      </li>
    </ul>
  );
};

export default FooterMenu;
