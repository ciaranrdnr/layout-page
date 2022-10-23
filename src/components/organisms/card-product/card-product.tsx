import {IProps} from '@Helpers/common-interface';
import styles from './styles/card-product.module.css';
import Card from '../../atoms/card';
import Image from '../../atoms/image';
import ContentProduct from '../../molecules/content-product';
import { buttonTypes } from '../../atoms/button/button';

interface ICardProductProps extends IProps {
  onClick?: () => void;
  imgSrc: string;
  price: number,
  title: string;
  discount: number;
  type: buttonTypes
  size?: "big" | "small";
}

const CardProduct = ({
  onClick,
  imgSrc,
  title,
  price,
  discount,
  type,
  className,
  size = 'big',
  ...props
}: ICardProductProps) => {
  return (
    <Card className={`${styles[`card-${size}`]} ${className ? className : ''}`} {...props}>
      <Image src={imgSrc} alt='img-product' className={`${styles[`img`]} ${type ? type : ''}`}/>
      <ContentProduct discount={discount} price={price} title={title} type={type}/>
    </Card>
  );
};
export default CardProduct;