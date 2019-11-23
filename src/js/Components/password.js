import {
  checkNumberInPassword,
  checkUpperCaseInPassword,
  checkSpecjalInPassword
} from './../utils';

export const checkPassword = (pass, spanPassword) => {
  const arrPass = [...pass];
  let number = false;
  let specjal = false;
  let uppercase = false;

  number = checkNumberInPassword(arrPass);
  specjal = checkSpecjalInPassword(arrPass);
  uppercase = checkUpperCaseInPassword(arrPass);

  if (number) {
    spanPassword.innerHTML = ' ';
    if (specjal) {
      spanPassword.innerHTML = ' ';
      if (uppercase) {
        spanPassword.innerHTML = ' ';
      } else {
        spanPassword.innerHTML = 'Use uppercase';
      }
    } else {
      spanPassword.innerHTML = 'Use specjal';
    }
  } else {
    spanPassword.innerHTML = 'Use number';
  }
};
