// Функция для проверки длины строки
const checkLength = (str, length) => str.length <= length;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (str) => {
  const editedStr = str.replaceAll(' ', '').toLowerCase();
  let newStr = '';
  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }
  return (editedStr === newStr);
};

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const returnIntegers = (str) => {

  str = str.toString();

  const arr = str.split('');
  const newString = arr.reduce((acc, letter) => !Number.isNaN(parseInt(letter, 10))
    ? [...acc, parseInt(letter, 10)]
    : [...acc], []);

  return parseInt(newString.join(''), 10);
};


/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/

const getMinutesPoint = (str) => {
  const arr = str.split(':');
  return Number(arr[0]) * 60 + Number(arr[1]);
};

const getMinutesPointByDuration = (start, duration) => start + duration;

const isMeetingTimeOk = (startWorkTime, endWorkTime, startMeetingTime, meetingDuration) => (
  getMinutesPoint(startMeetingTime) >= getMinutesPoint(startWorkTime)
  && getMinutesPoint(startMeetingTime) <= getMinutesPoint(endWorkTime)
  && getMinutesPointByDuration(getMinutesPoint(startMeetingTime), meetingDuration) >= getMinutesPoint(startWorkTime)
  && getMinutesPointByDuration(getMinutesPoint(startMeetingTime), meetingDuration) <= getMinutesPoint(endWorkTime)
);

console.log(isMeetingTimeOk('08:00', '17:30', '14:00', 90)); // true
console.log(isMeetingTimeOk('8:0', '10:0', '8:0', 120)); // true
console.log(isMeetingTimeOk('08:00', '14:30', '14:00', 90)); // false
console.log(isMeetingTimeOk('14:00', '17:30', '08:0', 90)); // false
console.log(isMeetingTimeOk('8:00', '17:30', '08:00', 900)); // false
