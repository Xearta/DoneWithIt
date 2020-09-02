import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://192.168.1.17:9000/api',
});

const get = apiClient.get;
apiClient.get = async (url, params, axoisConfig) => {
  const response = await get(url, params, axoisConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
