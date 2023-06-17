// Функция для проверки длины строки
const checkLength = (string, length) => string.length <= length;

console.log(checkLength('проверяемая строка', 10));

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  let editedStr = string.replaceAll(' ', '').toLowerCase();
  let newStr = '';
  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }
  return (editedStr === newStr);
}

console.log(isPalindrome('Кекс '));

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const returnIntegers = (str) => {

  str = str.toString();

  const arr = str.split('');
  const newString = arr.reduce((acc, letter) => !Number.isNaN(parseInt(letter, 10))
    ? [...acc, parseInt(letter, 10)]
    : [...acc], []);

  return parseInt(newString.join(''), 10);
}

console.log(returnIntegers('2023 год'));
console.log(returnIntegers('ECMAScript 2022'));
console.log(returnIntegers('1 кефир, 0.5 батона'));
console.log(returnIntegers('агент 007'));
console.log(returnIntegers(2013));
console.log(returnIntegers(-1));
console.log(returnIntegers(1.5));
