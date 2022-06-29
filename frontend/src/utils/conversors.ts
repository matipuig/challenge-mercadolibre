/**
 * Converts some values to other.
 */

/**
 * Makes the number more human friendly, like: 1000 -> 1.000.
 * @param number Number to convert to a human friendly format.
 * @param decimals Decimals behind the number.
 */
export const makeHumanFriendly = (number: number, decimals?: number): string => {
  const numberFormatter = new Intl.NumberFormat('en-US');
  const formattedNumber = numberFormatter.format(number);
  const formattedWithPoints = formattedNumber.replace(/,/g, '.');
  if (!decimals) {
    return formattedWithPoints;
  }
  const stringDecimals = decimals.toString();
  const decimalsWithZero = stringDecimals.length < 2 ? `0${stringDecimals}` : stringDecimals;
  return `${formattedWithPoints},${decimalsWithZero}`;
};

export default { makeHumanFriendly };
