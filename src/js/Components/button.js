export const hideForm = () => {
  const form = document.querySelector('form');
  form.style.opacity = '0';
  setTimeout(() => {
    form.style.display = 'none';
  }, 800);
};

export const createSuccessWindow = () => {
  const div = document.createElement('div');
  const body = document.querySelector('body');
  div.innerHTML = 'Success!';
  div.classList.add('success');
  body.append(div);
  showSuccessWindow();
};

const showSuccessWindow = () => {
  const success = document.querySelector('.success');
  setTimeout(() => {
    success.style.opacity = '1';
    success.style.display = 'grid';
  }, 1000);
};
