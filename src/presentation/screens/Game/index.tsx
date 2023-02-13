import { useLoaderData } from 'react-router-dom';

const Game = () => {
  const { sessionId, currency }: any = useLoaderData();
  return (
    <div>
      Game
      {currency}
      {sessionId}
    </div>
  );
};

export default Game;
