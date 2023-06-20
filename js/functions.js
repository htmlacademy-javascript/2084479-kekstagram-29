// Функция для проверки длины строки
const checkLength = (string, length) => string.length <= length;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  let editedStr = string.replaceAll(' ', '').toLowerCase();
  let newStr = '';
  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }
  return (editedStr === newStr);
}

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const returnIntegers = (str) => {

  str = str.toString();

  const arr = str.split('');
  const newString = arr.reduce((acc, letter) => !Number.isNaN(parseInt(letter, 10))
    ? [...acc, parseInt(letter, 10)]
    : [...acc], []);

  return parseInt(newString.join(''), 10);
}
