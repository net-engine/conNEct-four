import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import PlayerDisplay from './components/PlayerDisplay';
import Header from './components/Header';
import Board from './components/Board';
import { PLAYERS } from './data';

const Main = () => {
  const [ turn, setTurn ] = useState<number>(0);

  const nextTurn = () => {
    const next = turn + 1;
    const overflow = next > PLAYERS.length - 1;
    setTurn(overflow ?  0 : next);
  };

  return (
    <div className="Page">
      <Header />
      <div className="Content">
        <PlayerDisplay turn={turn} />
        <Board nextTurn={nextTurn} />
      </div>
    </div>
  );
};

const container = document.getElementById('root');
ReactDOM.render(<Main />, container);
