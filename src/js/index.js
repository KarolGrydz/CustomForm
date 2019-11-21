import '../styles/index.scss';
console.log('hello');

const sendButton = document.querySelector('button');
const email = document.querySelector('input[type="email"]');
const emailInfo = document.querySelector('.email span');
const password = document.querySelector('input[type="password"]');
const message = document.querySelector('textarea');

const checkEmail = email => {
  const arrEmail = [...email];
  arrEmail.some(letter => {
    if (letter === '@') {
      return (emailInfo.innerHTML = 'Jest ok');
    } else {
      emailInfo.innerHTML = 'Jest nie ok';
    }
  });
};

const checkPassword = pass => {
  const arrPass = [...pass];
  let number = false;
  let specjal = false;
  let uppercase = false;
};

const checkMessageBox = message => {
  console.log(message);
};

sendButton.addEventListener('click', e => e.preventDefault());
email.addEventListener('keyup', e => checkEmail(e.target.value));
password.addEventListener('keyup', e => console.log(e.target.value));
message.addEventListener('keyup', e => console.log(e.target.value));
