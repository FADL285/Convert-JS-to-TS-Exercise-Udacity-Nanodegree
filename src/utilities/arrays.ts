// /primitive type
type PrimitiveType = string | number | boolean;

// Concatenate two arrays
export const concatArr = <T, U>(arr1: T[], arr2: U[]) => {
  return [...arr1, ...arr2];
};

// Add numbers in an array
export const addArr = (arr: number[]): number => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Find the largest number in an array
export const lgNum = (arr: (number | string)[]): number => {
  let largest = 0;
  arr.forEach((x) => {
    if (typeof x === 'number' && x > largest) {
      largest = x;
    }
  });
  return largest;
};

// Remove the 3rd item from an array
export const cut3 = (arr: PrimitiveType[]): PrimitiveType[] => {
  arr.splice(2, 1);
  return arr;
};
