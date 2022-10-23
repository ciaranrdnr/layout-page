import {IProps} from '@Helpers/common-interface';
import styles from './styles/content-product.module.css';
import Button from '../../atoms/button';
import Badge from './../../atoms/badge';
import { convertToCurrency } from '../../../helpers/common-helper';
import { buttonTypes } from '@Components/atoms/button/button';

interface IContentProductProps extends IProps {
  price: number;
  discount: number;
  title: string;
  type?: buttonTypes;
}

const ContentProduct = ({
  title,
  price,
  discount,
  type = 'active',
}: IContentProductProps) => {
  return (
    <div className={styles['content']}>
      <p className={styles['title']}>{title}</p>
      <p className={styles['price-counted']}>Rp{convertToCurrency(Math.floor(price*(1-discount/100)))}</p>
      <div className={styles['content-price']}>
        <p className={styles['price']}>Rp{convertToCurrency(price)}</p>
        <Badge label={String(discount)+'%'}/>
      </div>
      <Button type={type} />
    </div>
  );
};
export default ContentProduct;