import Styles from './styles/button.module.css';
import {IProps} from '@Helpers/common-interface';

export type buttonTypes = 'active' | 'disabled';
interface IButtonProps extends IProps {
  onClick?: () => void;
  type?: buttonTypes;
}

const Button = ({
  onClick,
  type = 'active',
  className,
  ...props
}: IButtonProps) => {
  return (
    <button
      type="button"
      className={`${Styles['btn-'+type]} ${className? className : ''}`}
      disabled={type === "disabled"}
      {...props}
    >
      {type === "active"?
      "Add to bag"
      :
      "Out of stock"
      }
    </button>
  );
};
export default Button