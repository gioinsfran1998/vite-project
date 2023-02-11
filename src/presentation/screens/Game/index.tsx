import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Game = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { session }: any = useLoaderData();
  return <div>Game{session}</div>;
};

export default Game;
