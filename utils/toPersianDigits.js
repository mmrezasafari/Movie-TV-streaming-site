export default function toPersianDigit(n) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n
    .toString()
    .split('')
    .map((x) => {
      if (x === '.' || x === '/') {
        return x
      } else {
        return farsiDigits[x]
      }
    })
    .join('');
}
