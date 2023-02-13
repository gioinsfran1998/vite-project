import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-api-plinko.sysgaming.dev/'
});

export const startSession = async (session: string) => {
  return await api
    .post(`https://dev-api-plinko.sysgaming.dev/start-session/${session}`)
    .then(({ data }) => {
      return data;
    });
};
