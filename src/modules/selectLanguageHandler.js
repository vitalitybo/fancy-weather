import changeLanguage from './changeLanguage';

export default (event) => {
  const locale = event.target.value;
  changeLanguage(locale);
};
