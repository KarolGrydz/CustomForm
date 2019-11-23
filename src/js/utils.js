import { specjalCharacters } from './constants';

export const preventFromAction = e => e.preventDefault();

export const checkUpperCaseInPassword = arr =>
  arr.some(elem => (elem === elem.toUpperCase() ? true : false));

export const checkNumberInPassword = arr =>
  arr.some(elem => (isNaN(elem) ? false : true));

export const checkSpecjalInPassword = arr =>
  arr.some(arrElem =>
    specjalCharacters.some(specElem => (specElem === arrElem ? true : false))
  );
