import { FC, memo } from 'react';

import SvgSelector from '../helper/SvgSelector';

const Header: FC = memo(() => {
  return (
    <div className="header" >
      <h1 className="header__title">Страница заметок</h1>
      <SvgSelector name="logo"/>
    </div >
  );
});

export default Header;
