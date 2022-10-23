import {IProps} from '@Helpers/common-interface';
import style from './styles/badge.module.css';

interface IBadgeProps extends IProps {
  onClick?: () => void;
  label: string;
}

const Badge = ({
  onClick,
  label,
  className,
  ...props
}: IBadgeProps) => {
  return (
    <div className={`${style.badge} ${className ? className :''}`} onClick={onClick} {...props}>
      {label}
    </div>
  );
};
export default Badge;