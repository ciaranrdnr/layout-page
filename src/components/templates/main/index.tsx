import React, { ReactNode, useEffect, useState } from 'react';
import styles from './styles/main.module.css';
import {isMobile} from 'react-device-detect'
import ChevronIcon from '@Assets/icon/chevron/chevron-icon.tsx';
import ProductScroll from '@Components/organisms/product-scroll';
interface IProps {
children?: ReactNode;
}

const Main = ({
  children
}: IProps) => {
  const [mobile, setisMobile] = useState(false)
  useEffect(() => setisMobile(isMobile), [])
  const productScroll = <ProductScroll/>
  return (
    <main className={styles.blue}>
      <div className={`${styles.layout} ${mobile ? styles.mobile:''}`}>
        <section className={`${styles.sidebyside} ${mobile ? styles.mobile:''}`}>
          <div className={`${styles.section} ${styles.one}`}><h1>1</h1></div>
          <div className={`${styles.section} ${styles.two}`}><h2>2</h2></div>
        </section>
        {mobile && <section className={`${mobile ? styles.mobile:''}`}>{productScroll}</section>}
        <section className={`${styles.section} ${styles.three} ${mobile ? styles.mobile:''}`}><h2>3</h2></section>
        <section className={`${styles.section} ${styles.four} ${mobile ? styles.mobile:''}`}><h2>4</h2></section>
        {!mobile && <section >{productScroll}</section>}
      </div>
      <button  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}

       style={{borderRadius: '100%', transform: 'rotate(-90deg)', display: 'flex', background: 'white', boxShadow: '0px 1px 6px 0px rgb(0 0 0 / 12%)', position: 'fixed', bottom: '2vh', right: '2vw'}} >
        <ChevronIcon width={24} height={24}  color="#0095DA"/>
      </button>
      {children}
    </main>
  );
};
export default Main;