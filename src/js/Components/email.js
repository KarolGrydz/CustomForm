export const checkEmail = (emailLetter, spanElement) => {
  const arrEmail = [...emailLetter];
  let permit = false;
  arrEmail.some(letter => {
    if (letter === '@') {
      permit = true;
      return (spanElement.innerHTML = ' ');
    } else {
      spanElement.innerHTML = 'Wrong email';
    }
  });
  return permit;
};
