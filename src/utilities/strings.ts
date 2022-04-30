export const concat = (str1: string, str2: string): string => {
  return str1 + str2;
};

export const capitalize = (str: string): string => {
  const newStr = str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
  return newStr;
};

export const upperCase = (str: string): string => {
  return str.toUpperCase();
};

export const lowerCase = (str: string): string => {
  return str.toLowerCase();
};
