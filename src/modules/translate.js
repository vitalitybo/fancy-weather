import { YandexTranslateAPIKey } from '../../environment';
import { current, translatedWords } from './dataStorage';

export default async (string, ...langsArray) => {
  const APIKey = YandexTranslateAPIKey;
  const uriBase = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';

  const promises = [];

  langsArray.forEach((lang) => {
    if (lang === current.locale) {
      translatedWords.city[lang] = string;
    }

    const requestURI = `${uriBase}key=${APIKey}&text=${string}&lang=${current.locale}-${lang}`;

    promises.push(fetch(requestURI));
    // .then((res) => res.json()));
    // .then((data) => data.text[0]));
    // });
  });

  Promise.all(promises)
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((data) => {
      data.forEach((result) => {
        const translateToLang = result.lang.split('-')[1];
        [translatedWords.city[translateToLang]] = result.text;
      });
    });
};
