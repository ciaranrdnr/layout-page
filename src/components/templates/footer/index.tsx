import ChevronIcon from '@Assets/icon/chevron/chevron-icon.tsx';
import React, { useState } from 'react';
import styles from './styles/footer.module.css';

interface IProps {
}

const Footer = ({
}: IProps) => {
  const [isOpenFooter, setOpenFooter] = useState(false)
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet felis vitae diam pretium, non hendrerit risus lacinia. Cras dapibus interdum diam, quis ultricies purus laoreet sit amet. Vestibulum sollicitudin sed nunc a dictum. Phasellus luctus libero et dolor tristique, sit amet egestas est sagittis. Nulla urna felis, molestie vitae sagittis et, aliquet in leo. Integer eu pellentesque lectus. Sed commodo dignissim velit eget accumsan."
  return (
    <footer className={styles.blue}>
      {isOpenFooter && <div className={styles.content}>{content}</div>}
      <div className={`${styles.showAll} ${isOpenFooter? styles.isOpen: styles.isClose}`} onClick={
        ()=> {
          setOpenFooter(!isOpenFooter)
        }
      }><p>{isOpenFooter?'Collapse All':'Show All'}</p> <ChevronIcon width={24} height={24} color={'#0095DA'}/></div>
      <div className={styles.trademark}>
       c 2022 PT Global Digital Niaga
      </div>
    </footer>
  );
};
export default Footer;