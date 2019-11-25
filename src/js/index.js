import {
  emailBox,
  emailInfo,
  passwordBox,
  passwordInfo,
  messageBox,
  messageInfo,
  sendButton,
  sendButtonInfo
} from './constants';

import { checkMessageBox } from './Components/message';
import { checkEmail } from './Components/email';
import { checkPassword } from './Components/password';

import { hideForm, createSuccessWindow } from './Components/button';

import '../styles/index.scss';

let emailOK = false;
let passwordOK = false;

sendButton.addEventListener('click', e => {
  e.preventDefault();
  if (emailOK) {
    if (passwordOK) {
      hideForm();
      createSuccessWindow();
    } else {
      sendButtonInfo.innerHTML = 'Please insert password';
    }
  } else {
    sendButtonInfo.innerHTML = 'Please insert email';
  }
});
emailBox.addEventListener(
  'keyup',
  e => (emailOK = checkEmail(e.target.value, emailInfo))
);
passwordBox.addEventListener(
  'keyup',
  e => (passwordOK = checkPassword(e.target.value, passwordInfo))
);
messageBox.addEventListener('keyup', e =>
  checkMessageBox(e.target.value, messageBox, messageInfo)
);
