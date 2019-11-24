export const hideForm = () => {
  const form = document.querySelector('form');
  form.style.opacity = '0';
  setTimeout(() => {
    form.style.display = 'none';
  }, 500);
};

export const createSuccessWindow = () => {
  const div = document.createElement('div');
  const body = document.querySelector('body');
  div.innerHTML = 'Success!';
  div.classList.add('success');
  body.append(div);
  showSuccessWindow(div);
};

const showSuccessWindow = element => {
  setTimeout(() => {
    element.style.opacity = '1';
  }, 1000);
};
