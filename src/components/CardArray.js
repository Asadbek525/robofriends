import React from 'react';
import Card from './Card';

const CardArray = ({ robots }) => {
  return robots.map((user, i) => {
    return (
      <Card
        key={i}
        name={robots[i].name}
        id={robots[i].id}
        username={robots[i].username}
        email={robots[i].email}
      />
    );
  });
};
export default CardArray;
