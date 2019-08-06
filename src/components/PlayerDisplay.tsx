import classnames from 'classnames';
import React from 'react';

import { PLAYERS } from '../data';

interface Props {
  turn: number;
}

const PlayerDisplay = ({ turn }: Props) => (
  <div className="Players">
    {PLAYERS.map((player, i) => (
      <div key={player.name} className={classnames({
        active: i === turn,
      })}>
        {player.name}
      </div>
    ))}
  </div>
);

export default PlayerDisplay;
