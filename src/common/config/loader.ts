import { json, LoaderFunctionArgs } from 'react-router-dom';
import { getQueryParams } from '../utils';
import { startSession } from '../services/api';

export const gameLoader = async ({ request }: LoaderFunctionArgs) => {
  const { session } = getQueryParams(request);

  if (!session) throw new Error('session_id_not_found');

  const response = await startSession(session);

  return json({
    balance: response.balance,
    currenccy: response.currency,
    gameMode: response.gameMode,
    hasReward: response.hasReward,
    homeUrl: response.homeUrl,
    language: response.language,
    oddsMatrix: response.oddsMatrix,
    operatorConfig: response.operatorConfig,
    sessionId: response.sessionId,
    userName: response.userName
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const gameDevLoader = async ({ request }: LoaderFunctionArgs) => {
  throw new Error('code_not_ready');
};
