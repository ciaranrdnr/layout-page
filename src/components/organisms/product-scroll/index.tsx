import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import CardProduct from '../card-product';
import {buttonTypes} from '../../atoms/button/button'
import styles from './styles/product-scroll.module.css';
interface IProps {
}

const ProductScroll = ({
}: IProps) => {
    const [mobile, setisMobile] = useState(false)
  useEffect(() => setisMobile(isMobile), [])
  const imageSrc = 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
  const datas = [
      {discount: 25,
      price: 7200000,
      title: "NIKE AJ1 Retro High White University Blue",
      
      type: "active"
        },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        
        type: "disabled"
      },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        
        type: "active"
      },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        
        type: "disabled"
      },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        
        type: "active"
      },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        type: "active"
      },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        type: "active"
      },{discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        type: "active"
      },
      {discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        type: "active"
      },
       {discount: 25,
        price: 7200000,
        title: "NIKE AJ1 Retro High White University Blue",
        type: "active"
      },
      
      ]
  const listProduct = datas.map((data, i)=> {
    return (
      <div key={i} style={{maxWidth: mobile? '132px': '182px'}}>
        <CardProduct discount={data.discount} price={data.price} title={data.title} type={data.type as buttonTypes} imgSrc={imageSrc}  />
      </div>
    )
  })
  return (
    <div className={'scrolling-touch'} style={{overflowX: 'scroll', maxWidth: '100vw'}}>
      <div style={{display: 'flex', gap: '10px', width: '100vw'}}>
        {listProduct}
        </div>
    </div>
 
  );
};
export default ProductScroll;