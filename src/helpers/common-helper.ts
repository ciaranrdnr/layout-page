export const convertToCurrency = (num: string | number): string => {
  const str = num.toString();
  return str.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};