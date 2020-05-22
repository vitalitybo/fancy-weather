import { IPInfoAPIKey } from '../../environment';
import { ipInfo } from './response';

const getIPInfo = async () => {
  const APIKey = IPInfoAPIKey;
  const URI = `https://ipinfo.io?token=${APIKey}`;

  const response = await fetch(URI);
  const json = await response.json();

  Object.assign(ipInfo, json);
};

export default getIPInfo;
