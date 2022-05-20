import { FC } from 'react';

import logo from '../../assets/img/logo.svg';

const Header: FC = () => {
  return (
    <div className="header" >
      <h1 className="header__title">Страница заметок</h1>
      <img src={logo} width={50} alt="Logo" />
    </div >
  );
};

export default Header;
