import Image from 'next/future/image';
import React, { useEffect, useState } from 'react';
import styles from './styles/header.module.css';
import {isMobile} from 'react-device-detect'


const Header = () => {
  const [mobile, setisMobile] = useState(false)
  useEffect(() => setisMobile(isMobile), [])
  return (
    <header className={`${styles.blue} `}>
     <div className={`${styles.logo} ${mobile ?styles.mobile:''}`}>
      <Image alt='blibli' src={'https://www.static-src.com/frontend/static/img/logo-blibli-white.f8255fc.svg'} width={112} height={40} />
     </div>
    </header>
  );
};
export default Header;