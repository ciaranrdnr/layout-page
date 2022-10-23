import {IProps} from '@Helpers/common-interface';
import styles from './styles/card.module.css';

interface ICardProps extends IProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Card = ({
  onClick,
  children,
  className,
  ...props
}: ICardProps) => {
  return (
    <div className={`${className ? className:''} ${styles.card}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
};
export default Card;