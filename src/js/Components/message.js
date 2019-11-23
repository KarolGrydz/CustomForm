import { preventFromAction } from './../utils';

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
