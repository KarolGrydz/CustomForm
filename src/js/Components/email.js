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
