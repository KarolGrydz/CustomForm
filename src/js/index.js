import {
  emailBox,
  emailInfo,
  passwordBox,
  passwordInfo,
  messageBox,
  messageInfo,
  sendButton
} from './constants';

import { checkMessageBox } from './Components/message';
import { checkEmail } from './Components/email';
import { checkPassword } from './Components/password';

import '../styles/index.scss';

sendButton.addEventListener('click', e => e.preventDefault());
emailBox.addEventListener('keyup', e => checkEmail(e.target.value, emailInfo));
passwordBox.addEventListener('keyup', e =>
  checkPassword(e.target.value, passwordInfo)
);
messageBox.addEventListener('keyup', e =>
  checkMessageBox(e.target.value, messageBox, messageInfo)
);
