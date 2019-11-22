import { specjalCharacters } from './constants';

export const checkEmail = (emailLetter, spanElement) => {
  const arrEmail = [...emailLetter];
  arrEmail.some(letter => {
    if (letter === '@') {
      return (spanElement.innerHTML = ' ');
    } else {
      spanElement.innerHTML = 'Wrong email';
    }
  });
};

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

export const checkMessageBox = (
  messageLetters,
  messageElement,
  spanElement
) => {
  const arrMessage = [...messageLetters];
  let messageLettersLeft = 500 - arrMessage.length;
  if (messageLettersLeft < 0) {
    messageElement.addEventListener('keypress', preventFromAction);
    spanElement.innerHTML = `You have reached the maximum number of letters`;
  } else {
    messageElement.removeEventListener('keypress', preventFromAction);
    spanElement.innerHTML = `Leters left: ${messageLettersLeft}`;
  }
};

const preventFromAction = e => e.preventDefault();

export const checkUpperCaseInPassword = arr =>
  arr.some(elem => (elem === elem.toUpperCase() ? true : false));

export const checkNumberInPassword = arr =>
  arr.some(elem => (isNaN(elem) ? false : true));

const checkSpecjalInPassword = arr =>
  arr.some(arrElem =>
    specjalCharacters.some(specElem => (specElem === arrElem ? true : false))
  );
