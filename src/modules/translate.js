import { YandexTranslateAPIKey } from '../../environment';
// import { current } from './dataStorage';

export default async (string, fromLang, ...langsArray) => {
  const APIKey = YandexTranslateAPIKey;
  const uriBase = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';

  const buffer = {};
  const promises = [];

  langsArray.forEach((lang) => {
    // if (lang === current.locale) {
    //   buffer[lang] = string;
    // }

    const requestURI = `${uriBase}key=${APIKey}&text=${string}&lang=${fromLang}-${lang}`;

    promises.push(fetch(requestURI));
  });

  // Promise.all(promises)
  //   .then((responses) => Promise.all(responses.map((r) => r.json())))
  //   .then((data) => {
  //     data.forEach((result) => {
  //       const translateToLang = result.lang.split('-')[1];
  //       buffer[translateToLang] = result.text;
  //     });
  //   })
  //   .then(() => buffer);

  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((r) => r.json()));

  data.forEach((result) => {
    const translateToLang = result.lang.split('-')[1];
    buffer[translateToLang] = result.text;
  });

  buffer[fromLang] = string;

  return buffer;
};
