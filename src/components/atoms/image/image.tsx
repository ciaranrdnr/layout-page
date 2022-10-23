import styles from './styles/image.module.css';
import {IProps} from '@Helpers/common-interface';

interface IImageProps extends IProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Image = ({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: IImageProps) => {
  return (
 <img 
    src={src} 
    alt={alt} 
    width={width}
    height={height}
    className={`${styles.img} ${className}`} 
    {...props}
     />
   
  );
};
export default Image