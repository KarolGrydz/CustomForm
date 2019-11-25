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
  let permit = false;

  number = checkNumberInPassword(arrPass);
  specjal = checkSpecjalInPassword(arrPass);
  uppercase = checkUpperCaseInPassword(arrPass);

  if (number) {
    spanPassword.innerHTML = ' ';
    if (specjal) {
      spanPassword.innerHTML = ' ';
      if (uppercase) {
        spanPassword.innerHTML = ' ';
        permit = true;
        return permit;
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
