import { json, LoaderFunctionArgs } from 'react-router-dom';
import { getQueryParams } from '../utils';

// import { getQueryParams, sleep } from '~/common/utils/miscellaneous';

// import { apolloClient, setTokenLink } from '~/graphql';
// import { START_SESSION, GET_SCRACHCARDS } from '~/queries';

export const gameLoader = async ({ request }: LoaderFunctionArgs) => {
  const teste = new URL(request.url);

  console.log('request:', teste);
  const { session } = getQueryParams(request);

  // if (!session) throw new Error('session_id_not_found');

  // const { data: startSession } = await apolloClient.mutate({
  //   mutation: START_SESSION,
  //   variables: {
  //     id: session
  //   }
  // });

  // setTokenLink(startSession.startSession.accessToken);

  // await sleep(1000);

  // const { data: scratchcards } = await apolloClient.mutate({
  //   mutation: GET_SCRACHCARDS,
  //   variables: {
  //     id: session
  //   }
  // });

  // return json({
  //   session: startSession.startSession.session,
  //   accessToken: startSession.startSession.accessToken,
  //   scratchcards: scratchcards.scratchcardsForSale.edges
  // });

  return json({ session: session });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const gameDevLoader = async ({ request }: LoaderFunctionArgs) => {
  throw new Error('code_not_ready');
};
