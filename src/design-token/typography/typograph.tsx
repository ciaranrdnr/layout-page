import styles from './style/typograph.module.css';
interface ITypographProps  {
  label: string;
  size: 'xs'|'sm'|'md'|'lg'|'xl';
  weight: 'Regular'|'Medium'|'Semibold'|'Bold';
}
const Typograph = ({label, size,weight}: ITypographProps) => {
  return (
  <div>
      <p className={styles[size+weight]}>{label || "Type here"}</p>
      <br/>
      <p className={styles.xsRegular}>xs - 10px / Reg - 400</p>
      <p className={styles.xsMedium}>xs - 10px / Med - 500</p>
      <p className={styles.xsSemibold}>xs - 10px / Semi - 600</p>
      <p className={styles.xsBold}>xs - 10px / Bold - 700</p>
      <br/>
      <p className={styles.smRegular}>sm - 11px / Reg - 400</p>
      <p className={styles.smMedium}>sm - 11px / Med - 500</p>
      <p className={styles.smSemibold}>sm - 11px / Semi - 600</p>
      <p className={styles.smBold}>sm - 11px / Bold - 700</p>
      <br/>
      <p className={styles.mdRegular}>md - 12px / Reg - 400</p>
      <p className={styles.mdMedium}>md - 12px / Med - 500</p>
      <p className={styles.mdSemibold}>md - 12px / Semi - 600</p>
      <p className={styles.mdBold}>md - 12px / Bold - 700</p>
      <br/>
      <p className={styles.lgRegular}>lg - 14px / Reg - 400</p>
      <p className={styles.lgMedium}>lg - 14px / Med - 500</p>
      <p className={styles.lgSemibold}>lg - 14px / Semi - 600</p>
      <p className={styles.lgBold}>lg - 14px / Bold - 700</p>
      <br/>
      <p className={styles.xlRegular}>xl - 16px / Reg - 400</p>
      <p className={styles.xlMedium}>xl - 16px / Med - 500</p>
      <p className={styles.xlSemibold}>xl - 16px / Semi - 600</p>
      <p className={styles.xlBold}>xl - 16px / Bold - 700</p>
  </div>
  );
};
export default Typograph